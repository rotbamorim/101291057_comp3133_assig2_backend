import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './employees/employees.module';
import * as Joi from 'joi'

@Module({
  imports: 
  [ConfigModule.forRoot({
  isGlobal:true,
  validationSchema: Joi.object({
  PORT:Joi.number().required(),
  MONGODB_URI:Joi.string().required(),
  JWT_EXPIRATION: Joi.number().required(),
  JWT_SECRET:Joi.string().required()}),
}),
  GraphQLModule.forRoot<ApolloDriverConfig>({autoSchemaFile:true, driver:ApolloDriver}),
  UsersModule,  DatabaseModule, AuthModule, EmployeesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
