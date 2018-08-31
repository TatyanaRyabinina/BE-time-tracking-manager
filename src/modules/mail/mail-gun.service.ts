import * as mailGun from 'mailgun-js';
import { config } from '../../config';
import { EmailSendFailed, EmailSendSuccess } from './constants';
import { IMailResponse } from './mail.interfaces';

const mailGunInitialized = mailGun({
  apiKey: config.get('mail:apiKey'),
  domain: config.get('mail:domain'),
});

export const send = (message: any): Promise<IMailResponse> => {
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