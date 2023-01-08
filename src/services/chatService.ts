import { Repository } from "typeorm";
import { AppDataSource } from "../database/connection";
import ChatMessage from "../database/entity/messageEntity";
import { IChatMessage, IUser } from "../@types/types";

const ChatRepo: Repository<ChatMessage> =
  AppDataSource.getRepository(ChatMessage);

class ChatService {
  static async saveMessage(message: IChatMessage) {
    console.log("in send message service");
    const newUser = ChatRepo.save(message);
    return newUser;
  }
}

export default ChatService;
