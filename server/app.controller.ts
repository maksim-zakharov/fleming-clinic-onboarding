import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterClinicDto } from './dto/register-clinic.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterLabDto } from './dto/register-lab.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/register-clinic')
  // @UseInterceptors(FileInterceptor('crFiles'))
  async registerClinic(@Body() dto: RegisterClinicDto) {
    return this.appService.registerClinic(dto);
  }

  @Post('/register-lab')
  // @UseInterceptors(FileInterceptor('crFiles'))
  async registerLab(@Body() dto: RegisterLabDto) {
    return this.appService.registerLab(dto);
  }

  @Post('/:id/clinicCRFile')
  @UseInterceptors(FileInterceptor('files'))
  uploadClinicCRFile(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadClinicCRFile(id, files);
  }

  @Post('/:id/mohCRFile')
  @UseInterceptors(FileInterceptor('files'))
  uploadMohCRFile(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadMohCRFile(id, files);
  }


  @Post('/:id/labCRFile')
  @UseInterceptors(FileInterceptor('files'))
  async uploadLabCRFile(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadLabCRFile(id, files);
  }

  @Post('/labs/:id/labCRFile')
  @UseInterceptors(FileInterceptor('files'))
  async uploadLabCRFileForLab(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadLabCRFileForLab(id, files);
  }
}
