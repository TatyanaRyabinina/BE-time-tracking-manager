
import * as TimeTrackService from './time-track.service';

jest.mock('../../models/TimeTrack');

describe('Time Track Service', () => {
  it('addTimeTracks', async () => {
    const timeTracks = await TimeTrackService.addTimeTracks({ timeTracks: []}, { id: 1 });
    expect(timeTracks).toEqual([]);
  });
  it('getWeekTimeTracks', async () => {
    const timeTracks = await TimeTrackService.getWeekTimeTracks(
      { startDate: new Date(), endDate: new Date() },
      { id: 1 },
    );
    expect(timeTracks).toEqual([{ id: 1 }]);
  });
});