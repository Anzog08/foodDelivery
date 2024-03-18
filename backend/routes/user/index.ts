import { Router } from "express";
import { createUserController } from "../../contollers";

const router = Router();

router.post("/signup", createUserController);

export default router;
