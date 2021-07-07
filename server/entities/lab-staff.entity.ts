import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClinicEntity } from './clinic.entity';
import { LabEntity } from './lab.entity';

@Entity('labStaff')
export class LabStaffEntity extends BaseEntity {
  @PrimaryGeneratedColumn ({
    type: 'int',
  })
  public id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @ManyToOne(() => LabEntity, (v) => v.members, { onDelete: 'CASCADE' })
  lab: LabEntity;
}
