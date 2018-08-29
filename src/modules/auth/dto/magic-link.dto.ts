import { IsEmail } from 'class-validator';

export class MagicLinkDto {
  @IsEmail()
  public email: string;
}