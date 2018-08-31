import { WhereOptions } from 'sequelize';

interface IMockData {
  [key: string]: IMockData | string | number;
}

export class BasicMock {
  constructor(public data: IMockData) { }
  public findOne({ where = {} }: { where: WhereOptions<IMockData> }) {
    const matched = Object.keys(where).some((key: string) => where[key] === this.data[key]);
    if (matched) {
      return this.data;
    }
    return null;
  }
}