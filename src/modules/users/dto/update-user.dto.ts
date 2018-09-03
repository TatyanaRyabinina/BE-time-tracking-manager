import {
  Length,
  IsDate,
  IsEmpty,
  ValidateIf,
  IsString,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @Length(0, 50)
  public firstName: string;

  @Length(0, 50)
  public lastName: string;

  @IsEmpty()
  public email: undefined;

  @ValidateIf((dto) => dto.avatar)
  @IsString()
  public avatar: string;

  @ValidateIf((dto) => dto.birthdayDate)
  @IsDate()
  public birthdayDate: Date;

  @ValidateIf((dto) => dto.hireDate)
  @IsDate()
  public hireDate: Date;

  @ValidateIf((dto) => dto.phoneNumber)
  @IsPhoneNumber('UA') // TODO: update to dynamic param after adding locales
  public phoneNumber: string;

  @ValidateIf((dto) => dto.telegram)
  @IsString()
  public telegram: string;

  @ValidateIf((dto) => dto.skype)
  public skype: string;

  @ValidateIf((dto) => dto.slack)
  public slack: string;

  @ValidateIf((dto) => dto.departmentId)
  @IsNumber()
  public departmentId: number;

  @ValidateIf((dto) => dto.professionId)
  @IsNumber()
  public professionId: number;

  @ValidateIf((dto) => dto.professionLevelId)
  @IsNumber()
  public professionLevelId: number;
}