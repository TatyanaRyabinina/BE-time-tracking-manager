import { forbidden } from 'boom';

interface IExceptionBody {
  message: string;
  statusCode: number;
}

export default class PermissionDeniedException extends Error {
  public body: IExceptionBody;

  constructor(message: string) {
    super(message);
    this.body = forbidden(message).output.payload;
  }
}