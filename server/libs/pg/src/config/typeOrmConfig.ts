import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import { User } from "../entitys/user.entity";
console.log(__dirname)
export const typeOrmConfig:TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ka0503.+',
    database: 'webbuilder',
    entities:  [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema:true,
    // subscribers:[__filename + '/../subscribers/*.subscriber{.ts,.js}'],
  }
