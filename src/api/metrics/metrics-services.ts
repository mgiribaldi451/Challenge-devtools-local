import { getDateFromDb } from "../../db/mysql";
import Imetrics from "../../interfaces/Imetrics";

/**
 * Esta funcion le brinda la conexion a la base de datos al controller
 */
async function getMetrics(obj:Imetrics) {

  return getDateFromDb();
}

export default { getMetrics };


