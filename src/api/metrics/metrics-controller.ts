import { NextFunction, Request, Response } from "express";
import getMetricas from "./metrics-services";
import Imetrics from "../../interfaces/Imetrics";

/*
  Esta funcion es usada como controller para el endpoint  /metrics ,  el endpoint es un GET request
  Este endpoint devuelve todos los  3 servidores mas alertados.
*/
async function getMetrics(req: Request, res: Response, next: NextFunction) {
  try {
    const obj: Imetrics = req.body;
    const data = await getMetricas.getMetrics(obj);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { getMetrics };
