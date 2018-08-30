import createMagicLinkTemplate from './templates/magic-link.template';

export const InvalidEmailError = 'Invalid Email Constant!';
export const EmailSendFailed = 'Email Send Failed';
export const EmailSendSuccess = 'Email Send Success';

export interface IMailConfig {
  template: (options: {[key: string]: string }) => string;
  subject: string;
}

export interface IMailConfigs {
  [key: string]: IMailConfig;
}

export enum EMAIL_CONSTANTS {
  MAGIC_LINK,
  REGISTRATION,
}

export const MAIL_CONFIGS: IMailConfigs = {
  [EMAIL_CONSTANTS.MAGIC_LINK]: {
    subject: 'Sign In Magic Link',
    template: createMagicLinkTemplate,
  },
  [EMAIL_CONSTANTS.REGISTRATION]: {
    subject: '',
    template: () => '',
  },
};