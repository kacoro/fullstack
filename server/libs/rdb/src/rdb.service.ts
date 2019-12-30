import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
@Injectable()
export class RdbService {
    constructor(
        private readonly redisService: RedisService,
      ) { }
      async root(): Promise<boolean> {
        const client = await this.redisService.getClient('test')
        return true
     }
}
