import { Controller } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { Course } from 'libs/db/models/coruse.models';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:Course
})


@Controller('coursers')
@ApiTags('课程')
export class CoursersController {
    constructor(
        @InjectModel(Course) private readonly model:ReturnModelType<typeof Course>
    ){}
}
