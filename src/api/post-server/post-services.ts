import Iservers from "../../interfaces/Iservers";
import { postToDb } from "../../db/mysql";
import dayjs from "dayjs";

/**
 * Esta funcion le brinda la conexion a la base de datos al controller
 * 
 * Tambien parsea la fecha que viene como string al formato datetime para guardar en la base de datos
 */
async function postServers(obj: Iservers) {
  let date = obj.created_at.split("-");
  
  obj.created_at = dayjs(
    new Date(
      parseInt(date[5]),
      parseInt(date[4]) - 1,
      parseInt(date[3]),
      parseInt(date[0]),
      parseInt(date[1]),
      parseInt(date[2])
    )
  ).format("YYYY-MM-DD HH:mm:ss");
  
  return postToDb(obj);
}

export default { postServers };
