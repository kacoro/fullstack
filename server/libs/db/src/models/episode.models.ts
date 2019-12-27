import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode{
    @ApiProperty({description:'课时名称',example:'episode1'})
    @prop()
    name:string

    @ApiProperty({description:'文件',example:''})
    @prop()
    file:string
    
}