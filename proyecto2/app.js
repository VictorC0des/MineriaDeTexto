import mongoose from "mongoose";
import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import test from "./controllers/empleado.controller.js";
import test2 from "./controllers/supervisor.controller.js";

configDotenv();

mongoose.connect(process.env.URL_DB, )
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

const app = express();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

test();
test2();




