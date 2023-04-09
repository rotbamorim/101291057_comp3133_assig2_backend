import { Injectable } from '@nestjs/common';
import { CreateEmployeesInput } from './dto/input/create-employees-input.dto';
import { EmployeesRepository } from './employees.repository';
import { EmployeesDocument } from './models/employees.schema';

@Injectable()
export class EmployeesService {
    constructor(private readonly employeesRepository:EmployeesRepository ){

    }
    async createEmployees(createEmployeesData:CreateEmployeesInput){
        const employeesDocument = await this.employeesRepository.create({
            ...createEmployeesData,
        })

        return this.toModel(employeesDocument)
    }

    private toModel(employeesDocument:EmployeesDocument){
        return {
            _id: employeesDocument._id.toHexString(),
            ...employeesDocument,
        }
    }

    async getEmployees(){
        const employeesDocuments = await this.employeesRepository.find({})
        return employeesDocuments.map((employees) =>this.toModel(employees))
    }
}
