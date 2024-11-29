import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://patilharshal2122:Harshal2122@cluster0.ibjfk.mongodb.net/Food-DB"
    )
    .then(() => console.log("DB Connnected"));
};
