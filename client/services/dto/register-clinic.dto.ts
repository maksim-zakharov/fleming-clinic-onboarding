import { RegisterMemberDto } from './register-member.dto';
import { PcrTestTypesDto } from './pcr-test-types.dto';

export class RegisterClinicDto {
  name: string;

  nameArabic: string;

  website: string;

  governorate: string;

  city: string;

  rating: number;

  description: string;

  descriptionArabic: string;
  // Legal

  legalName: string;

  crNumber: string;

  crPerson: string;

  crDetails: string;

  signatoryName: string;

  signatoryPhoneNumber: string;

  signatoryEmail: string;

  crFiles: File[];
  // Bank

  bankName: string;

  branch: string;

  accountNumber: string;
  // Focal

  focalName: string;

  focalEmail: string;

  focalPhoneNumber: string;

  members: RegisterMemberDto[];

  roomTypes: PcrTestTypesDto[];
}
