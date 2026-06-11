import { database } from "./database.js";

export async function listarTimes() {
  const result = await database.query("SELECT * FROM times ORDER BY id");
  return result.rows;
}

export async function criarTime(nome, cidade) {
  const result = await database.query(
    "INSERT INTO times (nome, cidade) VALUES ($1, $2) RETURNING *",
    [nome, cidade]
  );

  return result.rows[0];
}

export async function listarJogadores() {
  const result = await database.query(`
    SELECT jogadores.id, jogadores.nome, jogadores.posicao, jogadores.idade, times.nome AS time
    FROM jogadores
    LEFT JOIN times ON jogadores.time_id = times.id
    ORDER BY jogadores.id
  `);

  return result.rows;
}

export async function criarJogador(nome, posicao, idade, time_id) {
  const result = await database.query(
    "INSERT INTO jogadores (nome, posicao, idade, time_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [nome, posicao, idade, time_id]
  );

  return result.rows[0];
}