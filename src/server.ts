import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./database/connection";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(helmet());

// Routes
app.use("/api/user", userRoutes);

// add the middleware to handle error, make sure to add if after registering routes method
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => console.log("database connected"))
  .catch((err: any) => console.log(err));

app.listen(PORT, () => {
  console.log(`🚀 server listening on ${PORT}`);
});
