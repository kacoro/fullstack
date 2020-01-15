import { Module, Global } from '@nestjs/common';
import { PgService } from './pg.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './config/typeOrmConfig'
@Global()
@Module({
  imports:[TypeOrmModule.forRootAsync(   {
    useFactory(){return typeOrmConfig}})],
  providers: [PgService],
  exports: [PgService],
})
export class PgModule {}
