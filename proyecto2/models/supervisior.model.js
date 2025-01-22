import { model } from "mongoose";
import { schema } from "./empleado.model.js";

export const supervisorModel = new model("Supervisor", schema);