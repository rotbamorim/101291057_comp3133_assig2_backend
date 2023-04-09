import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
import {PassportStrategy} from "@nestjs/passport"
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly usersService:UsersService){
        super({usernameField:'username'})
    }

    async validate(username:string, password: string){
        return this.usersService.validateUser(username,password)
    }
}

