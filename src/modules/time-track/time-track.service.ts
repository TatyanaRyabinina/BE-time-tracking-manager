import TimeTrack from '../../models/TimeTrack';
import { IUserJwt } from '../auth/interfaces';
import { AddTimeTracksDto } from './dto/add-time-tracks.dto';
import { CreateTimeTrack } from './dto/create-time-track.dto';
import { TimeTrackQueryDto } from './dto/time-track-query.dto';

export const removeTimeTracks = (dto: AddTimeTracksDto, userJwt: IUserJwt): PromiseLike<number> => {
  return TimeTrack.destroy({
    where: {
      userId: userJwt.id,
      taskId: dto.timeTracks.map(({ taskId }) => taskId),
      trackDate: dto.timeTracks.map(({ trackDate }) => trackDate),
    },
  });
};

export const addTimeTracks = async (dto: AddTimeTracksDto, userJwt: IUserJwt): Promise<TimeTrack[]> => {
  await removeTimeTracks(dto, userJwt);
  const timeTracks = dto.timeTracks.map((timeTrack: CreateTimeTrack) => ({ ...timeTrack, userId: userJwt.id }));
  return TimeTrack.bulkCreate(timeTracks);
};

export const getWeekTimeTracks = async (queryParams: TimeTrackQueryDto, userJwt: IUserJwt): Promise<TimeTrack[]> => {
  const timeTracks = await TimeTrack.findAll({
    where: {
      trackDate: {
        $between: [queryParams.startDate, queryParams.endDate],
      },
      userId: userJwt.id,
    },
  });
  return timeTracks;
};