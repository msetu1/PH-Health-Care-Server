import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllFromDB = async (req: Request, res: Response) => {
  const filters = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["page", "limit"]);
  const result = await AdminService.getAllFromDB(filters, options);
  res.status(200).json({
    success: true,
    message: "Admin data fetched !",
    data: result,
  });
};

export const AdminController = {
  getAllFromDB,
};
