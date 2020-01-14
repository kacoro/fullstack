import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  providers: [UserResolver, UserService]
})
export class UserModule {}
