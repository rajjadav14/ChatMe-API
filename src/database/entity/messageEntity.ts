import { Entity, Column, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Message {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @Column()
  content: string;

  @Column({ type: "timestamptz" }) // Recommended
  date_time_with_timezone: Date;

  constructor(sender: string, receiver: string, content: string) {
    this._id = new ObjectId();
    this.sender = sender;
    this.content = content;
    this.receiver = receiver;
    this.date_time_with_timezone = new Date();
  }
}
