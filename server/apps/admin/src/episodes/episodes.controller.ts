import { Controller } from '@nestjs/common';
import { Episode } from 'libs/db/models/episode.models';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
@Crud({
    model:Episode
})
@Controller('episode')
@ApiTags('课时')
@Controller('episodes')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>
    ){}
}
