import { Module } from '@nestjs/common';
import { RdbService } from './rdb.service';
import { RedisModule} from 'nestjs-redis'
@Module({
  imports: [
    RedisModule.forRootAsync({useFactory(){
      return {
        url:process.env.REDIS
      }
    }})
  ],
  providers: [RdbService],
  exports: [RdbService],
})
export class RdbModule {}
