import { NextFunction, Request, Response } from "express";
import postService from "./post-services";
import Iservers from "../../interfaces/Iservers";

/*
  Esta funcion es usada como controller para el endpoint  /popst-server ,  el endpoint es un POST request
  Este endpoint en via el post con el formato: {"server": "xxxx", "description": "ddddd", "created_at": "hh-mm-ss-dd-mm-yyyy", "server_type": "onprem/virtual"}
*/
async function postServers(req: Request, res: Response, next: NextFunction) {
  try {
    const obj: Iservers = req.body;
    const data = await postService.postServers(obj);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { postServers };

