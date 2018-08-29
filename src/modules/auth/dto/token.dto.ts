import { IsEmail, Length } from 'class-validator';

export class TokenDto {
  @IsEmail()
  public email: string;

  @Length(36)
  public token: string;
}