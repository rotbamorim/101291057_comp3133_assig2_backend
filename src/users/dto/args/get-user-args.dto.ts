import { ArgsType, Field } from "@nestjs/graphql";
import { IsString, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetUserArgs {

    @Field()
    @IsString()
    @IsNotEmpty()
    _id: string;
}