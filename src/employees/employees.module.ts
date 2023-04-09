import { Module } from '@nestjs/common';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';
import { EmployeesRepository } from './employees.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesSchema } from './models/employees.schema';
import  {Employees} from './models/employees.model';

@Module({
  imports: [MongooseModule.forFeature([
    {
    name: Employees.name,
    schema: EmployeesSchema
  }]) ,
],
  providers: [EmployeesResolver, EmployeesService, EmployeesRepository]
})
export class EmployeesModule {}
