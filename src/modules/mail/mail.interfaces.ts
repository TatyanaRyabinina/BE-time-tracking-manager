export interface ISendMailData {
  [key: string]: string;
}

export interface IMagicLinkEmailData extends ISendMailData{
  firstName: string;
  lastName: string;
  magicLink: string;
}

export interface IMailResponse {
  id: string;
  message: string;
}