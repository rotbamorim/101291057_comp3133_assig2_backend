import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { Query } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService:UsersService){}


        @Mutation(()=> User)
        async createUser(@Args('createUserData') createUserData: CreateUserInput){
            return this.usersService.createUser(createUserData)
        }


        @UseGuards(GqlAuthGuard)
        @Query(()=>User, {name:'user'})
        async getUser(@Args() getUserArgs:GetUserArgs){
            return this.usersService.getUser(getUserArgs)
        }
    
}
