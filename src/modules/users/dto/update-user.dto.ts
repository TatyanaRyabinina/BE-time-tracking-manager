import {
  Length,
  IsDate,
  IsEmpty,
  ValidateIf,
  IsString,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';
import { DefinitionProperty } from '../../../swagger';

export class UpdateUserDto {
  @DefinitionProperty()
  @Length(0, 50)
  public firstName: string;

  @DefinitionProperty()
  @Length(0, 50)
  public lastName: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.avatar)
  @IsString()
  public avatar: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.birthdayDate)
  @IsDate()
  public birthdayDate: Date;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.hireDate)
  @IsDate()
  public hireDate: Date;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.phoneNumber)
  @IsPhoneNumber('UA') // TODO: update to dynamic param after adding locales
  public phoneNumber: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.telegram)
  @IsString()
  public telegram: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.skype)
  public skype: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.slack)
  public slack: string;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.departmentId)
  @IsNumber()
  public departmentId: number;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.professionId)
  @IsNumber()
  public professionId: number;

  @DefinitionProperty()
  @ValidateIf((dto) => dto.professionalLevelId)
  @IsNumber()
  public professionalLevelId: number;
}