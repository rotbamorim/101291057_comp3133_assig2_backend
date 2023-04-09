import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { UsersRepository } from './users.repository';
import { UserDocument } from './models/user.Schema';
import { User } from './models/user.model';

@Injectable()
export class UsersService {

    constructor(private readonly usersRepository:UsersRepository){}

    async createUser(createUserData:CreateUserInput){
        await this.validateCreateUserData(createUserData)
        const UserDocument = await this.usersRepository.create({
            ...createUserData,
            password:await bcrypt.hash(createUserData.password,10),
        })

        return this.toModel(UserDocument)

    }

    private async validateCreateUserData(createUserData:CreateUserInput){
        try{
            await this.usersRepository.findOne({username:createUserData.username});
                }catch (error){

        }
        
        
    }

    async getUser(getUserArgs:GetUserArgs){
        const userDocument = await this.usersRepository.findOne(getUserArgs)
        return this.toModel(userDocument)
    }

    async validateUser(username:string, password: string){
        const userDocument = await this.usersRepository.findOne({username});
        const passwordIsValid = await bcrypt.compare(password, userDocument.password)
        if(!passwordIsValid){throw new UnauthorizedException('Password Incorrect') }

        return this.toModel(userDocument)
    }

    private toModel(userDocument:UserDocument):User{
        return{
            _id: userDocument._id.toHexString(),
            username: userDocument.username
        }
    }
}
