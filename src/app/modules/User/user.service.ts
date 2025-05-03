import { UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";

const createAdmin = async (data: any) => {

  const hashedPassword:string=await bcrypt.hash(data.password,12)
  // console.log(hashedPassword)

  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  // console.log(userData)

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdAdmin = await transactionClient.admin.create({
      data: data.admin,
    });
    return createdAdmin;
  });
  return result;
};

export const UserService = {
  createAdmin,
};
