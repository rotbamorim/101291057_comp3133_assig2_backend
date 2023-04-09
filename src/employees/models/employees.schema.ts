import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema ({versionKey:false})
export class EmployeesDocument extends AbstractDocument {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;
}

export const EmployeesSchema = SchemaFactory.createForClass(EmployeesDocument)