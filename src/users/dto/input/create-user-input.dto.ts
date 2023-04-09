import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreateUserInput{
    @Field()
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}