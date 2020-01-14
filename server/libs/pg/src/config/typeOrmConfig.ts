import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../entitys/user.entity";

export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ka0503.+',
    database: 'webbuilder',
    entities: [User],// [__filename + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema:true
  }
