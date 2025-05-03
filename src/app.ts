import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/User/user.route";

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("PH Health Care Server is running...");
});

export default app;
