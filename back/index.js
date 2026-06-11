import express from "express";
import cors from "cors";
import {
  getTimes,
  postTime,
  getJogadores,
  postJogador,
} from "./controller.js";

const server = express();
const PORT = 8080;

server.use(cors());
server.use(express.json());

server.get("/times", getTimes);
server.post("/times", postTime);
server.get("/jogadores", getJogadores);
server.post("/jogadores", postJogador);

server.listen(PORT, () => console.log("SERVER ON"));