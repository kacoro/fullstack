import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { UsersModule } from './users/users.module';
import { CoursersModule } from './coursers/coursers.module';
import { EpisodesModule } from './episodes/episodes.module';
import { ThemesModule } from './themes/themes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CommonModule, UsersModule, CoursersModule, EpisodesModule, ThemesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}