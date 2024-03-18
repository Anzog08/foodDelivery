import { Response, Request } from "express";
import { createUserQuery } from "../../queries/user";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.json(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
