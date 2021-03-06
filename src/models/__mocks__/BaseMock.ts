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
  public create(data: IMockData) {
    return data;
  }
  public destroy() {
    return 1;
  }
  public bulkCreate(data: IMockData[]) {
    return data;
  }
  public findAll() {
    return [this.data];
  }
  public scope() {
    return this;
  }
}