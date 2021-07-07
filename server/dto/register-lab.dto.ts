import {
  IsEmail,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { RegisterMemberDto } from './register-member.dto';
import { Type } from 'class-transformer';

export class RegisterLabDto {
  @IsNotEmpty({
    message: 'Lab Name is required',
  })
  labName: string;

  @IsNotEmpty({
    message: 'Lab Company Name is required',
  })
  labCompanyName: string;

  @IsNotEmpty({
    message: 'Lab CR Number is required',
  })
  labCRNumber: string;
  @IsNotEmpty({
    message: 'Contact Person is required',
  })
  contactPerson: string;
  @IsNotEmpty({
    message: 'Contact Details is required',
  })
  contactDetails: string;
  @IsNotEmpty({
    message: 'Authorized Signatory Name is required',
  })
  authorizedSignatoryName: string;
  @IsNotEmpty({
    message: 'Authorized Signatory Phone Number is required',
  })
  authorizedSignatoryPhoneNumber: string;
  @IsNotEmpty({
    message: 'Authorized Signatory Email is required',
  })
  @IsEmail({}, {
    message: 'Authorized Signatory Email must be a email',
  })
  authorizedSignatoryEmail: string;
  // Focal
  @IsNotEmpty({
    message: 'Focal Point Name is required',
  })
  focalPointName: string;
  @IsNotEmpty({
    message: 'Focal Point Email is required',
  })
  @IsEmail({}, {
    message: 'Focal Point Email must be a email',
  })
  focalPointEmail: string;
  @IsNotEmpty({
    message: 'Focal Point Phone Number is required',
  })
  focalPointPhoneNumber: string;

  @ValidateNested({
    // each: true,
    // always: true
  })
  // @IsNonPrimitiveArray()
  @Type(() => RegisterMemberDto)
  members: RegisterMemberDto[];
}
