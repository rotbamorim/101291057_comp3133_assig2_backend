import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employees } from './models/employees.model';
import { EmployeesService } from './employees.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateEmployeesInput } from './dto/input/create-employees-input.dto';


@Resolver(()=> Employees)
export class EmployeesResolver {
    constructor(private readonly employeesService:EmployeesService){}

        @UseGuards(GqlAuthGuard)
        @Mutation(()=>Employees)
        async createEmployees(
            @Args('createEmployeesData') createEmployeesData:CreateEmployeesInput,
        ){
            return this.employeesService.createEmployees(createEmployeesData)
        }

        @UseGuards(GqlAuthGuard)
        @Query(()=> [Employees], {name:'employees'})
        async getEmployees(){

            return this.employeesService.getEmployees();

        }

        

    
}
