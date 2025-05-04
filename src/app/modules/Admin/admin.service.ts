import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { adminSearchAbleFields } from "./admin.constant";

const getAllFromDB = async (params: any, options: any) => {
  const { page, limit } = options;
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.AdminWhereInput[] = [];
  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };
  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip: (Number(page) - 1) * limit,
    take: Number(limit),
  });
  return result;
};

export const AdminService = {
  getAllFromDB,
};
