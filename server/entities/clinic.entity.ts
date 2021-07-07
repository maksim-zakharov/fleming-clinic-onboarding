import {
  Column,
  Entity,
  BaseEntity,
  OneToMany,
  PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';
import { PcrTypesEntity } from './pcr-types.entity';
import { ClinicStaffEntity } from './clinic-staff.entity';

@Entity('clinic')
export class ClinicEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  public createdAt: Date;

  @Column({
    type: 'varchar',
  })
  legalCompanyName: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  clinicCRNumber: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  labCRNumber: string;

  @Column({
    type: 'varchar',
  })
  signatoryName: string;

  @Column({
    type: 'text',
  })
  signatoryPhoneNumber: string;

  @Column({
    type: 'text',
  })
  signatoryEmail: string;

  @Column({
    type: 'text',
    nullable: true
  })
  labCRFileUrl: string;

  @Column({
    type: 'text',
    nullable: true
  })
  clinicCRFileUrl: string;

  @Column({
    type: 'varchar',
  })
  clinicDescription: string;
  @Column({
    type: 'varchar',
  })
  clinicDescriptionArab: string;
  @Column({
    type: 'varchar',
  })
  clinicName: string;
  @Column({
    type: 'varchar',
  })
  clinicNameArab: string;
  @Column({
    type: 'varchar',
  })
  clinicWebsite: string;
  @Column({
    type: 'varchar',
  })
  governate: string;
  @Column({
    type: 'varchar',
  })
  city: string;
  @Column({
    type: 'varchar',
  })
  contactPerson: string;
  @Column({
    type: 'varchar',
  })
  contactDetails: string;
  // Focal
  @Column({
    type: 'varchar',
  })
  focalPointName: string;
  @Column({
    type: 'varchar',
  })
  focalPointEmail: string;
  @Column({
    type: 'varchar',
  })
  @Column({
    type: 'varchar',
  })
    // @IsMobilePhone()
  focalPointPhoneNumber: string;
  labName: string;
  @Column({
    type: 'varchar',
  })
  legalLabName: string;
  @Column({
    type: 'varchar',
  })
  bankName: string;
  @Column({
    type: 'varchar',
  })
  branch: string;
  @Column({
    type: 'varchar',
  })
  bankAccountName: string;

  @OneToMany(() => ClinicStaffEntity, (v) => v.clinic, { cascade: true })
  members: ClinicStaffEntity[];

  @OneToMany(() => PcrTypesEntity, (v) => v.clinic, { cascade: true })
  pcrTestTypes: PcrTypesEntity[];
}
