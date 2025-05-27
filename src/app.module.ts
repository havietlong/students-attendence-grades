import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { FinalGradeModule } from './final-grade/final-grade.module';
import { AverageGradeModule } from './average-grade/average-grade.module';
import { ClassModule } from './class/class.module';
import { MajorsModule } from './majors/majors.module';
import { DepartmentModule } from './department/department.module';
import { LecturerModule } from './lecturer/lecturer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    StudentsModule,
    FinalGradeModule,
    AverageGradeModule,
    ClassModule,
    MajorsModule,
    DepartmentModule,
    LecturerModule,
  ],
})
export class AppModule {}
