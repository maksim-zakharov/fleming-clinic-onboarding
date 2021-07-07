import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicEntity } from './entities/clinic.entity';
import { PcrTypesEntity } from './entities/pcr-types.entity';
import { UserEntity } from './entities/user.entity';
import { S3Service } from './s3.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LabEntity } from './entities/lab.entity';
import { ClinicStaffEntity } from './entities/clinic-staff.entity';
import { LabStaffEntity } from './entities/lab-staff.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.RDS_HOSTNAME || process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.RDS_PORT || 5432,
      username: process.env.RDS_USERNAME || process.env.POSTGRES_USER || 'postgres',
      password: process.env.RDS_PASSWORD || process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.RDS_DB_NAME || process.env.POSTGRES_DB || 'fleming-clinic',
      autoLoadEntities: true,
      synchronize: true,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    }),
    TypeOrmModule.forFeature([
      ClinicEntity,
      PcrTypesEntity,
      LabEntity,
      ClinicStaffEntity,
      LabStaffEntity,
      UserEntity,
    ]),
    ServeStaticModule.forRoot({
      serveStaticOptions: {
        cacheControl: true,
        maxAge: 300
      },
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, S3Service],
})
export class AppModule {}
