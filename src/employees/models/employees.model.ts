import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "src/common/abstract.model";

@ObjectType()
export class Employees extends AbstractModel {
    @Field()
    readonly firstName: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly email: string;
    
}