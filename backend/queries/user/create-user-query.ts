import { Request } from "express";
import { UserModel } from "../../db/models";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    const user = await UserModel.create({
      name,
      email,
      phone,
      password,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
