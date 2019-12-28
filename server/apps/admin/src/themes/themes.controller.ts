import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Theme } from 'libs/db/models/theme.models';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
@Crud({
    model:Theme
})
@Controller('themes')
@ApiTags('主题')
export class ThemesController {
    constructor(@InjectModel(Theme) private readonly model){}
}
