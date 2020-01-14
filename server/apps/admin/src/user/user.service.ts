import { Injectable } from '@nestjs/common';
import { SignupInput } from './input/signupInput';
import { UserRepository } from './user.repository';
import { ErrorResponse } from './shared/errorResponse';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepo:UserRepository
    ){}
    async signup(signupInput:SignupInput):Promise<ErrorResponse[] | null>{
        const userExit =await this.userRepo.findOne({where:{email:signupInput.email}})
        if(userExit){
            return [{
                path:"email",
                message:'inalid email or password'
            }]
        }

        await this.userRepo.save({
            ...signupInput,
        })

        return null
    }


}
