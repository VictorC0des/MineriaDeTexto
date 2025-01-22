import { Schema, model } from "mongoose";

export const schema = new Schema({
    name: String,
    apepat: String,
    apemat: String,
    salary: Number,

})

export const empleadoModel = new model("Empleado", schema);
