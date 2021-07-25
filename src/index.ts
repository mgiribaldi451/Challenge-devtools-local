import express, { Express } from "express";
import api from "./api";

const app: Express = express();
app.use(express.json());
app.set("port", 3001);
app.listen(3001);
app.use("/api/", api);
