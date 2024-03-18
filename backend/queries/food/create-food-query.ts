import { Request } from "express";
import { FoodModel, UserModel } from "../../db/models";

export const createFoodQuery = async (req: Request) => {
  const { name, price, ingredients, image } = req.body;

  const result = await FoodModel.create({
    name,
    price,
    ingredients,
    image,
  });
  return result._id;
};
