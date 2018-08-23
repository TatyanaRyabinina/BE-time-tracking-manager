import { unauthorized } from 'boom';

interface IExceptionBody {
  message: string;
  statusCode: number;
}

export default class UnauthorizedException extends Error {
  public body: IExceptionBody;

  constructor(message: string) {
    super(message);
    this.body = unauthorized(message).output.payload;
  }
}