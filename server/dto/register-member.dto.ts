import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';

export class RegisterMemberDto {
  @IsNotEmpty({
    message: 'Staff Name is required'
  })
  name: string;
  @IsNotEmpty({
    message: 'Staff Phone Number is required'
  })
  // @IsMobilePhone()
  phoneNumber: string;
  @IsNotEmpty({
    message: 'Staff Email is required'
  })
  @IsEmail({}, {
    message: 'Staff Email must be a email',
  })
  email: string;
}
