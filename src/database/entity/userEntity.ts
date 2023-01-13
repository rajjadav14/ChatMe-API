import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Index,
} from "typeorm";
import { ObjectId } from "mongodb";
import { IUser } from "../../@types/types";

@Entity()
export default class User extends BaseEntity implements IUser {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt?: Date;

  @UpdateDateColumn({
    type: "timestamp",
    nullable: true,
    default: () => "NOW()",
  })
  lastLoggedIn?: Date;

  // constructor(
  //   name?: string,
  //   email?: string,
  //   password?: string,
  //   createdAt?: Date
  // ) {
  //   super();
  //   this._id = new ObjectId();
  //   this.name = name || "";
  //   this.email = email || "";
  //   this.password = password || "";
  //   this.createdAt = createdAt || new Date();
  //   this.updatedAt = new Date();
  // }
}
