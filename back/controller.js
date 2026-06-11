import {
  listarTimes,
  criarTime,
  listarJogadores,
  criarJogador,
} from "./repository.js";

export async function getTimes(request, response) {
  try {
    const times = await listarTimes();
    response.status(200).json(times);
  } catch (err) {
    console.error("ERRO getTimes:", err.message);
    response.status(500).json({ erro: err.message });
  }
}

export async function getJogadores(request, response) {
  try {
    const jogadores = await listarJogadores();
    response.status(200).json(jogadores);
  } catch (err) {
    console.error("ERRO getJogadores:", err.message);
    response.status(500).json({ erro: err.message });
  }
}

export async function postTime(request, response) {
  const { nome, cidade } = request.body;

  const novoTime = await criarTime(nome, cidade);
  response.status(201).json(novoTime);
}



export async function postJogador(request, response) {
  const { nome, posicao, idade, time_id } = request.body;

  const novoJogador = await criarJogador(nome, posicao, idade, time_id);
  response.status(201).json(novoJogador);
}