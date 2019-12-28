import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Theme{
    @ApiProperty({description:'主题名称',example:'theme1'})
    @prop()
    name:string

    @ApiProperty({description:'主题配置',example:`{"palette":{"primary":{"main":"#3f51b5"},"secondary":{"main":"#f50057"}}}`})
    @prop()
    options:string

}