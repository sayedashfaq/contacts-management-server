import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import contactRoutes from "./routes/contacts.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert { type: 'json' };
configDotenv();

const app = express();
app.use(express.json());
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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", contactRoutes);
