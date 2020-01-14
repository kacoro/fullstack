import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SignupInput } from './input/signupInput';
import { UserService } from './user.service';
import { ErrorResponse } from './shared/errorResponse';


@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService:UserService
    ){}
    @Query(() => String)
        async hello(){
            return "hello word!"
     }

    @Mutation(() => [ErrorResponse],{nullable:true})
        async signup(@Args("signupInput") signupInput: SignupInput ):Promise<ErrorResponse[]|null>{
            return this.userService.signup(signupInput)
    }
   
}
