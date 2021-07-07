import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClinicEntity } from './clinic.entity';

@Entity('pcr_types')
export class PcrTypesEntity extends BaseEntity {
  @PrimaryGeneratedColumn ({
    type: 'int',
  })
  public id: string;
  @Column({
    type: 'varchar',
  })
  pcrTestName: string;
  @Column({
    type: 'varchar',
  })
  pcrTestNameArab: string;
  price: string;
  @Column({
    type: 'varchar',
  })
  pcrTestDescription: string;
  @Column({
    type: 'varchar',
  })
  pcrTestDescriptionArab: string;

  @ManyToOne(() => ClinicEntity, (v) => v.pcrTestTypes, { onDelete: 'CASCADE' })
  clinic: ClinicEntity;
}
