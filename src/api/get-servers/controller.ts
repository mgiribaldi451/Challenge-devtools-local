
import { NextFunction, Request, Response } from "express";
import services from "./services";


/*
  Esta funcion es usada como controller para el endpoint  /get-server ,  el endpoint es un GET request
  Este endpoint devuelve todos los servidores alojados en la base datos.
*/
async function getServers(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await services.getServers();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { getServers };
