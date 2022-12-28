import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./db/connection";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(helmet());
app.use("/api/user", userRoutes);

AppDataSource.initialize()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
