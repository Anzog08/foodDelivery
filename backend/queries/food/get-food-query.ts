import { Request } from "express";
import { FoodModel } from "../../db";

export const getFoodsQuery = async (req: Request) => {
  const allFoods = await FoodModel.find();
  return allFoods;
};
