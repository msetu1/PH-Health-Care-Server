import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllFromDB = async (req: Request, res: Response) => {
  const filters = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await AdminService.getAllFromDB(filters, options);
  res.status(200).json({
    success: true,
    message: "Admin data fetched !",
    meta: result.meta,
    data: result.data,
  });
};

const getSingAdminData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AdminService.getSingAdminData(id);

  res.status(200).json({
    success: true,
    message: "Admin SIngle Data retrieved Successfully",
    data: result,
  });
};

const updateAdminDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AdminService.updateAdminDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "Admin Data updated Successfully",
    data: result,
  });
};

const deleteAdminData = async (req: Request, res: Response) => {
  const { id } = req.params;
  await AdminService.deleteAdminData(id);

  res.status(200).json({
    success: true,
    message: "Admin Data Deleted Successfully",
    data: {},
  });
};

export const AdminController = {
  getAllFromDB,
  getSingAdminData,
  updateAdminDB,
  deleteAdminData,
};
