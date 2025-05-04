import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./app/modules/User/user.route";
import { AdminRoutes } from "./app/modules/Admin/admin.route";

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/admin", AdminRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("PH Health Care Server is running...");
});

export default app;
