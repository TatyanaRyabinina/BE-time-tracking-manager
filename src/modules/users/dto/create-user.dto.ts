import { Length, IsEmail, IsDate } from 'class-validator';

export class CreateUserDto {
  @Length(0, 50)
  public firstName: string;

  @Length(0, 50)
  public lastName: string;

  @IsEmail()
  public email: string;
}