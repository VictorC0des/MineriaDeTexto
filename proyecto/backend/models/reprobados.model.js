import { Schema, model } from "mongoose";
const schema_reprobados = new Schema({
    name: String,
    apepat: String,
    apemat: String,
    edad: Number
});

const modelReprobados = new model("Tabla de alumnos reprobados", schema_reprobados);
export default modelReprobados;