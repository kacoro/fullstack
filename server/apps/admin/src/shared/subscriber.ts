import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm";
import { User } from "libs/pg/entitys/user.entity";
@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<User>{
    listenTo(){
        return User;
    }

    beforeInsert(event:InsertEvent<User>){
        console.log(`BEFORE POST INSERTED:`,event.entity)
    }
}