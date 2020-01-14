import {InputType,Field} from 'type-graphql'
import { User } from 'libs/pg/entitys/user.entity';
@InputType({description:"New recipe data"})
export class SignupInput implements Partial<User>{
  @Field()
  userName: string;

  @Field()
  email:string;

  @Field()
  password:string;
}