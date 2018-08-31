import { config } from '../../config';
import {
  MAIL_CONFIGS,
  EMAIL_CONSTANTS,
  IMailConfig,
  InvalidEmailError,
} from './constants';
import { send } from './mail-gun.service';
import { ISendMailData, IMailResponse } from './mail.interfaces';

export const sendMail = (
  data: ISendMailData,
  recipient: string,
  mailConstant: EMAIL_CONSTANTS,
): Promise<IMailResponse> => {
  const mailConfig: IMailConfig = MAIL_CONFIGS[mailConstant];
  if (!mailConfig) {
    throw new TypeError(InvalidEmailError);
  }
  const { subject, template } = mailConfig;
  const mailData = {
    from: config.get('mail:from'),
    to: recipient,
    subject,
    html: template(data),
  };
  return send(mailData);
};
