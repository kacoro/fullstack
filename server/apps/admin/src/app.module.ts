import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from 'libs/db';
import { UsersModule } from './users/users.module';
import { CoursersModule } from './coursers/coursers.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [DbModule, UsersModule, CoursersModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
