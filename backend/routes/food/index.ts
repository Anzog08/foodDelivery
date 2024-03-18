import { Router } from "express";
import { CreateFoodController, GetFoodsController } from "../../contollers";

export const FoodRouter = Router();

FoodRouter.get("/foods", GetFoodsController);
FoodRouter.post("/food-create", CreateFoodController);
