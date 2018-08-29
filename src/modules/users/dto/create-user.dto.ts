import {Length, IsEmail, IsDate} from 'class-validator';
 
export class CreateUserDto {
  @Length(0, 50)
  firstName: string;

  @IsDate()
  birthdayDate: Date;

  @Length(0, 50)
  lastName: string;

  @IsEmail()
  email: string;
}