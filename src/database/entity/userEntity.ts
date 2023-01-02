import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp", default: () => "NOW()" })
  createdAt?: Date;

  @UpdateDateColumn({
    type: "timestamp",
    nullable: true,
  })
  updatedAt?: Date;

  constructor(
    name?: string,
    email?: string,
    password?: string,
    createdAt?: Date
  ) {
    super();
    this._id = new ObjectId();
    this.name = name || "";
    this.email = email || "";
    this.password = password || "";
    this.createdAt = createdAt || new Date();
    this.updatedAt = new Date();
  }
}
