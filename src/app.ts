import cors from "cors";
import express, { type Application } from "express";
import { userRouter } from "./components";

const app: Application = express();
// cors para que el cliente pueda hacer peticiones

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);

export default app;

// import express from "express";

// const app = express();

// app.get("/", (_req, res) => {
//   res.send("Hola mundo");
// });

// export default app;
