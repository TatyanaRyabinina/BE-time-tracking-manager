import { notFound } from 'boom';

interface IExceptionBody {
  message: string;
  statusCode: number;
}

export default class NotFoundException extends Error {
  public body: IExceptionBody;

  constructor(message: string) {
    super(message);
    this.body = notFound(message).output.payload;
  }
}