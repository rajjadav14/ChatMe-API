import { MongoRepository, Repository, Unique } from "typeorm";
import { AppDataSource } from "../database/connection";
import ChatMessage from "../database/entity/messageEntity";
import { IChatMessage, IUser } from "../@types/types";
import { ObjectId } from "mongodb";
import { URLSearchParams } from "url";
import UserService from "./userService";

const ChatRepo: MongoRepository<ChatMessage | any> =
  AppDataSource.getMongoRepository(ChatMessage);

class ChatService {
  static async saveMessage(message: IChatMessage) {
    console.log("in send message service");
    const newUser = ChatRepo.save(message);
    return newUser;
  }

  static async getLastMessage(receiver: string, sender: string) {
    const last = await ChatRepo.findOne({
      where: {
        $or: [
          { receiver, sender },
          { receiver: sender, sender: receiver },
        ],
      },
      order: { date_time: "DESC" },
    });

    return { content: last!.content, time: last!.date_time };
  }

  static async getUniqueContact(sender: string) {
    const contacts: { userName: string; email: string }[] = [];
    const emails: string[] = await ChatRepo.distinct("receiver", {
      sender,
    });
    for (const email of emails) {
      const userName = (await UserService.getUserNameByEmail(email)) as string;
      contacts.push({ userName, email });
    }

    return contacts;
  }

  static async getAllMessages(user: string, otherUser: string) {
    const chatHistory = await ChatRepo.find({
      where: {
        $or: [
          { sender: user, receiver: otherUser },
          { sender: otherUser, receiver: user },
        ],
      },
      order: { date_time: "ASC" },
    });

    return chatHistory;
  }
}

export default ChatService;
