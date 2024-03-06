import { connect, set } from "mongoose";
const CONNECTION_STRING: string =
  "mongodb+srv://Anzog:Pi81214@cluster0.tfyik0e.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);

  connect(CONNECTION_STRING);

  console.log("Database connected");
};
