import cors from "cors";
import express from "express";
import { chatRouter, userRouter } from "./components";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/chat", chatRouter);

export default app;
