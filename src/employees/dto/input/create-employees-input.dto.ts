import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateEmployeesInput{
    @Field()
    @IsNotEmpty()
    @IsString()
    firstName:string;

    @Field()
    @IsNotEmpty()
    @IsString()
    lastName:string;

    @Field()
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email:string
}