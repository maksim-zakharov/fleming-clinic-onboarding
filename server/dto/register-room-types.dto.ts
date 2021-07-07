import { IsNotEmpty} from 'class-validator';

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
  pcrTestDescription: string;
  @IsNotEmpty({
    message: 'PCR Test Description Arab is required'
  })
  pcrTestDescriptionArab: string;
}
