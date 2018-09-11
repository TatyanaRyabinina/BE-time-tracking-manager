import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody, validateQuery } from '../../core/middleware/validate.middleware';
import { postDefinition, getDefinition } from '../../swagger';
import { AddTimeTracksDto } from './dto/add-time-tracks.dto';
import { TimeTrackQueryDto } from './dto/time-track-query.dto';
import { TimeTracksResponse } from './responses/save-time-tracks.response';
import * as TimeTrackService from './time-track.service';

const path: string = '/time-tracks';

getDefinition({ path, query: TimeTrackQueryDto, responses: { [HttpStatus.OK]: TimeTracksResponse }});
const getTimeTracks = async (ctx: Context) => {
  const data = await TimeTrackService.getWeekTimeTracks(ctx.query, ctx.state.user);
  ctx.body = new TimeTracksResponse(data);
};

postDefinition({ path, body: AddTimeTracksDto, responses: { [HttpStatus.OK]: TimeTracksResponse }});
const saveTimeTracks = async (ctx: Context) => {
  const data = await TimeTrackService.addTimeTracks(ctx.body, ctx.state.user);
  ctx.body = new TimeTracksResponse(data);
};

export default () => {
  const timeTrackRouter = new Router();
  timeTrackRouter.get(path, validateQuery(TimeTrackQueryDto), getTimeTracks);
  timeTrackRouter.post(path, validateBody(AddTimeTracksDto), saveTimeTracks);
  return timeTrackRouter.routes();
};