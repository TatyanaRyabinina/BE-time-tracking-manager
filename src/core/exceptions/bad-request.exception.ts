import { badRequest } from 'boom';

interface IExceptionBody {
  message: string;
  statusCode: number;
}

export default class ValidationException extends Error {
  public body: IExceptionBody;

  constructor(message: string) {
    super(message);
    this.body = badRequest(message).output.payload;
  }
}