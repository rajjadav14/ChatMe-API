import { Entity, Column, ObjectIdColumn, BaseEntity } from "typeorm";
import { ObjectId } from "mongodb";
import { IChatMessage } from "../../@types/types";

@Entity("chatMessage")
export default class ChatMessage extends BaseEntity implements IChatMessage {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @Column()
  content: string;

  @Column({ type: "timestamp" }) // Recommended
  date_time: Date;

  // constructor(sender: string, receiver: string, content: string) {
  //   this._id = new ObjectId();
  //   this.sender = sender;
  //   this.content = content;
  //   this.receiver = receiver;
  //   this.date_time = new Date();
  // }
}
