import { Length, IsEmail, IsDate } from 'class-validator';

export class CreateUserDto {
  @Length(0, 50)
  public firstName: string;

  @IsDate()
  public birthdayDate: Date;

  @Length(0, 50)
  public lastName: string;

  @IsEmail()
  public email: string;
}