import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterClinicDto } from './dto/register-clinic.dto';
import { ClinicEntity } from './entities/clinic.entity';
import { LabStaffEntity } from './entities/lab-staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { S3Service } from './s3.service';
import { LabEntity } from './entities/lab.entity';
import { ClinicStaffEntity } from './entities/clinic-staff.entity';
import { RegisterLabDto } from './dto/register-lab.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(LabEntity)
    private readonly labRepository: Repository<LabEntity>,
    @InjectRepository(ClinicEntity)
    private readonly repository: Repository<ClinicEntity>,
    private readonly s3Service: S3Service,
  ) {}

  async registerClinic(dto: RegisterClinicDto) {
    const existClinic = await this.repository.findOne({
      where: { clinicCRNumber: dto.clinicCRNumber },
    });
    if (existClinic) {
      throw new HttpException(
        `The Clinic CR Number is already registered`,
        HttpStatus.OK,
      );
    }

    const newHotel = ClinicEntity.create(dto);

    newHotel.members = dto.members.map((member) =>
      ClinicStaffEntity.create(member),
    );

    return this.repository.save(newHotel);
  }

  async registerLab(dto: RegisterLabDto) {
    const existLab = await this.labRepository.findOne({
      where: { labCRNumber: dto.labCRNumber },
    });
    if (existLab) {
      throw new HttpException(
        `The Lab CR Number is already registered`,
        HttpStatus.OK,
      );
    }

    const newHotel = LabEntity.create(dto);

    newHotel.members = dto.members.map((member) =>
      LabStaffEntity.create(member),
    );

    return this.labRepository.save(newHotel);
  }

  async uploadClinicCRFile(clinicId: number, file: any) {
    const existClinic = await this.repository.findOne(clinicId);
    if (!existClinic) {
      throw new HttpException(`The Clinic is not registered`, HttpStatus.OK);
    }
    const { Location } = await this.s3Service.upload(clinicId, 'clinicCR', file);
    existClinic.clinicCRFileUrl = Location;
    await this.repository.save(existClinic);
  }

  async uploadLabCRFile(clinicId: number, file: any) {
    const existClinic = await this.repository.findOne(clinicId);
    if (!existClinic) {
      throw new HttpException(`The Clinic is not registered`, HttpStatus.OK);
    }
    const { Location } = await this.s3Service.upload(clinicId, 'labCR', file);
    existClinic.labCRFileUrl = Location;
    await this.repository.save(existClinic);
  }

  async uploadLabCRFileForLab(labId: number, file: any) {
    const existLab = await this.labRepository.findOne(labId);
    if (!existLab) {
      throw new HttpException(`The Lab is not registered`, HttpStatus.OK);
    }
    const { Location } = await this.s3Service.upload(labId, 'labLabCR', file);
    existLab.labCRFileUrl = Location;
    await this.labRepository.save(existLab);
  }
}
