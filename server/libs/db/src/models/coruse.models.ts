import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.models'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Course{
    @ApiProperty({description:'课程名称',example:'user1'})
    @prop()
    name:string

    @ApiProperty({description:'封面图',example:'user1'})
    @prop()
    cover:string
    
    @ApiProperty({description:'课时'})
    @arrayProp({itemsRef:'Episode'})
    episodes:Ref<Episode>[]
}