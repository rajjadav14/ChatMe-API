import { Entity, Column, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "timestamptz" }) // Recommended
  date_time_with_timezone: Date;

  constructor(name: string, email: string, password: string) {
    this._id = new ObjectId();
    this.name = name;
    this.email = email;
    this.password = password;
    this.date_time_with_timezone = new Date();
  }
}
