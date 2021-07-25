
import { getFromDb} from "../../db/mysql";
/**
 * Esta funcion le brinda la conexion a la base de datos al controller
 */
async function getServers() {
  return getFromDb();
}


export default { getServers  };
