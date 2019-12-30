import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from 'libs/db';
import { RdbModule } from '@app/rdb';


@Module({
  imports:[ConfigModule.forRoot({
    isGlobal:true
  }),DbModule,RdbModule],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
