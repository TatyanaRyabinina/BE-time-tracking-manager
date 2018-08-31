export interface ISendMailData {
  [key: string]: string;
}

export interface IMagicLinkEmailData extends ISendMailData {
  firstName: string;
  lastName: string;
  link: string;
}

export interface IMailResponse {
  id: string;
  message: string;
}