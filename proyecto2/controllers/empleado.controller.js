import {empleadoModel} from "../models/empleado.model.js";

empleadoModel.create({
    name: "Juan",
    apepat: "Perez",
    apemat: "Gomez",
    salary: 1000
})
const test = () =>{
    console.log("llamando al controlador de empleado");
}
export default test;