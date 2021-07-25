import axios from "axios";

async function getServers() {
  return axios.get("/api/get-servers").then((req) => {
   
    return req.data;
  });
}

 async function getMetrics() {
   return axios.get("/api/metrics").then((req) => {
 
     return req.data;
   });
 }

export { getServers , getMetrics};
