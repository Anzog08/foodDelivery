import { Response, Request } from "express"

export const createUserController = async (req:Request, res:Response) => {
  try {



  } catch (error:any) {
    res.send(error.message);
  }
};
