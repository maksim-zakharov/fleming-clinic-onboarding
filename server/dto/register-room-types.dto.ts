import { IsNotEmpty, MinLength } from 'class-validator';

export class RegisterRoomTypesDto {
  @IsNotEmpty({
    message: 'PCR Test Name is required'
  })
  pcrTestName: string;
  @IsNotEmpty({
    message: 'PCR Test Name Arab is required'
  })
  pcrTestNameArab: string;
  @IsNotEmpty({
    message: 'PCR Test Price is required'
  })
  price: string;
  @IsNotEmpty({
    message: 'PCR Test Description is required'
  })
  @MinLength(50,{
    message: 'PCR Test Description must be longer than 50 characters',
  })
  pcrTestDescription: string;
  @IsNotEmpty({
    message: 'PCR Test Description Arab is required'
  })
  @MinLength(50,{
    message: 'PCR Test Description Arab must be longer than 50 characters',
  })
  pcrTestDescriptionArab: string;
}
