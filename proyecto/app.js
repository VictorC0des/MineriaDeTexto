import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import test from "./backend/controllers/reprobados.controller.js";

dotenv.config( );

mongoose.connect(process.env.URL_BD)
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

  const app = express()
  app.use(cors())
  app.listen(4000,()=> {
    console.log("Servidor en puerto 4000")
  })
    test()
  
  



