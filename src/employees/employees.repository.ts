import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "src/database/abstract.repository";
import { EmployeesDocument } from "./models/employees.schema";
import { FilterQuery, Model } from "mongoose";
import { Employees } from "./models/employees.model";
import { InjectModel } from "@nestjs/mongoose";


@Injectable()
export class EmployeesRepository extends AbstractRepository<EmployeesDocument>{
protected readonly logger = new Logger(EmployeesRepository.name)

    constructor(@InjectModel(Employees.name)employeesModel:Model<EmployeesDocument>, 
    
    ){
        super(employeesModel)
    }

    

}