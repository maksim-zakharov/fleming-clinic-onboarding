import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDecimal,
  IsEmail,
  IsFQDN,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber, ValidateNested,
} from 'class-validator';
import { RegisterMemberDto } from './register-member.dto';
import { RegisterRoomTypesDto } from './register-room-types.dto';
import { Type } from 'class-transformer';

export class RegisterClinicDto {
  @IsNotEmpty({
    message: 'Legal Company Name is required',
  })
  legalCompanyName: string;
  @IsNotEmpty({
    message: 'Clinic CR Number is required',
  })
  clinicCRNumber: string;
  @IsNotEmpty({
    message: 'Lab CR Number is required',
  })
  labCRNumber: string;
  @IsNotEmpty({
    message: 'Clinic Description is required',
  })
  clinicDescription: string;
  @IsNotEmpty({
    message: 'Clinic Description Arab is required',
  })
  clinicDescriptionArab: string;
  @IsNotEmpty({
    message: 'Sample Collection is required',
  })
  pageType: string;
  @IsNotEmpty({
    message: 'Clinic Name is required',
  })
  clinicName: string;
  @IsNotEmpty({
    message: 'Clinic Name Arab is required',
  })
  clinicNameArab: string;
  @IsNotEmpty({
    message: 'Clinic Website is required',
  })
  clinicWebsite: string;
  @IsNotEmpty({
    message: 'Governate is required',
  })
  governate: string;
  @IsNotEmpty({
    message: 'City is required',
  })
  city: string;
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
  signatoryName: string;

  @IsNotEmpty({
    message: 'Authorized Signatory Phone Number is required',
  })
    // @IsMobilePhone(null, null, {
    //   message: 'Authorized Signatory Phone Number must be a phone number';
    // })
  signatoryPhoneNumber: string;
  @IsNotEmpty({
    message: 'Authorized Signatory Email is required',
  })
  @IsEmail({}, {
    message: 'Authorized Signatory Email must be a email',
  })
  signatoryEmail: string;
  // Focal
  @IsNotEmpty({
    message: 'Focal Point Name is required',
  })
  focalPointName: string;
  @IsNotEmpty({
    message: 'Focal Point Email is required',
  })
  @IsEmail({}, {
    message: 'Authorized Signatory Email must be a email',
  })
  focalPointEmail: string;
  @IsNotEmpty({
    message: 'Lab Name is required',
  })
  labName: string;
  @IsNotEmpty({
    message: 'Legal Lab Name is required',
  })
  legalLabName: string;
  @IsNotEmpty({
    message: 'Bank Name is required',
  })
  bankName: string;
  @IsNotEmpty({
    message: 'Bank Branch is required',
  })
  branch: string;
  @IsNotEmpty({
    message: 'Bank Account Name is required',
  })
  bankAccountName: string;
  @IsNotEmpty({
    message: 'Focal Point Phone Number is required',
  })
    // @IsMobilePhone()
  focalPointPhoneNumber: string;
  @IsNotEmpty({
    message: 'At least one Staff Member is required',
  })
  @IsArray({
    message: 'At least one Staff Member is required',
  })
  @ArrayNotEmpty({
    message: 'At least one Staff Member is required',
  })
  @ValidateNested({
    // each: true,
    // always: true
  })
  // @IsNonPrimitiveArray()
  @Type(() => RegisterMemberDto)
  members: RegisterMemberDto[];
  @IsNotEmpty({
    message: 'At least one Contracted Hotel is required',
  })
  @IsArray({
    message: 'At least one Contracted Hotel is required',
  })
  @ArrayNotEmpty({
    message: 'At least one Contracted Hotel is required',
  })
  @ValidateNested({
    // each: true,
    // always: true
  })
  // @IsNonPrimitiveArray()
  @Type(() => RegisterRoomTypesDto)
  pcrTestTypes: RegisterRoomTypesDto[];
}
