import * as mailGun from 'mailgun-js';
import { config } from '../../config';
import {
  MAIL_CONFIGS,
  EMAIL_CONSTANTS,
  IMailConfig,
  InvalidEmailError,
  EmailSendFailed,
  EmailSendSuccess,
} from './constants';
import { ISendMailData, IMailResponse } from './mail.interfaces';

const mailGunInitialized = mailGun({
  apiKey: config.get('mail:apiKey'),
  domain: config.get('mail:domain'),
});

const send = (message: any): Promise<IMailResponse> => {
  return new Promise((res, rej) => {
    mailGunInitialized.messages()
    .send(message, (error, body) => {
      if (error) {
        console.log(EmailSendFailed, error);
        rej(error);
      }
      console.log(EmailSendSuccess, body);
      res(body);
    });
  });
};

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
