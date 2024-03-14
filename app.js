import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import contactRoutes from "./routes/contacts.js";
configDotenv();

const app = express();

app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`),
    mongoose
      .connect(process.env.DB_URI)
      .then((res) => console.log("> Connected..."))
      .catch((err) =>
        console.log(`> Error while connecting to mongoDB : ${err.message}`)
      );
});

app.use("/", contactRoutes);
