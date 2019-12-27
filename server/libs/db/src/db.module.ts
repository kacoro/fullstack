import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.models';
import { Course } from './models/coruse.models';
import { Episode } from './models/episode.models';

const models = TypegooseModule.forFeature([User,Course,Episode])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/kacoro',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
