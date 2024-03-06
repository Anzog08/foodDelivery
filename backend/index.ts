import express from "express";
import cors from "cors";
import { connectDb } from "./db";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDb();
app.listen(8000, () => {
  console.log("running on port 8000");
});
