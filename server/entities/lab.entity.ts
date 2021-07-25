import {
  Column,
  Entity,
  BaseEntity,
  OneToMany,
  PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';
import { LabStaffEntity } from './lab-staff.entity';

@Entity('lab')
export class LabEntity extends BaseEntity {
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
  labName: string;

  @Column({
    type: 'varchar',
  })
  labCompanyName: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  labCRNumber: string;
  @Column({
    type: 'varchar',
  })
  contactPerson: string;
  @Column({
    type: 'varchar',
  })
  contactDetails: string;
  @Column({
    type: 'varchar',
  })
  authorizedSignatoryName: string;
  @Column({
    type: 'varchar',
  })
  authorizedSignatoryPhoneNumber: string;
  @Column({
    type: 'varchar',
  })
  authorizedSignatoryEmail: string;

  @Column({
    type: 'text',
    nullable: true
  })
  labCRFileUrl: string;

  @Column({
    type: 'text',
    nullable: true
  })
  mohFileUrl: string;
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
    // @IsMobilePhone()
  focalPointPhoneNumber: string;

  @OneToMany(() => LabStaffEntity, (v) => v.lab, { cascade: true })
  members: LabStaffEntity[];
}
