import { DataSource } from "typeorm";
import { Message } from "./messageEntity";
import { User } from "./userEntity";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  url: process.env.MONGOURL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: [User, Message],
  //   subscribers: [],
  //   migrations: [],
});
