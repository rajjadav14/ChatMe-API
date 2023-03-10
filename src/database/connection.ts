import { DataSource } from "typeorm";
import ChatMessage from "./entity/messageEntity";
import User from "./entity/userEntity";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "chatMeData",
  url: process.env.MONGOURL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: [User, ChatMessage],
  subscribers: [],
  migrations: [],
});
