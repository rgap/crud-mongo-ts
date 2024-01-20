import cors from "cors";
import express from "express";
import { userRouter } from "./components";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

export default app;
