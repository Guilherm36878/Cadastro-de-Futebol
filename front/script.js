const API_URL = "http://localhost:8080";

async function carregarTimes() {
  const resposta = await fetch(`${API_URL}/times`);
  const times = await resposta.json();

  const lista = document.getElementById("listaTimes");
  lista.innerHTML = "";

  times.forEach((time) => {
    const item = document.createElement("li");
    item.textContent = `ID ${time.id} - ${time.nome} - ${time.cidade}`;
    lista.appendChild(item);
  });
}

async function carregarJogadores() {
  const resposta = await fetch(`${API_URL}/jogadores`);
  const jogadores = await resposta.json();

  const lista = document.getElementById("listaJogadores");
  lista.innerHTML = "";

  jogadores.forEach((jogador) => {
    const item = document.createElement("li");
    item.textContent = `${jogador.nome} - ${jogador.posicao} - ${jogador.idade} anos - Time: ${jogador.time}`;
    lista.appendChild(item);
  });
}

async function cadastrarTime() {
  const nome = document.getElementById("nomeTime").value;
  const cidade = document.getElementById("cidadeTime").value;

  await fetch(`${API_URL}/times`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, cidade }),
  });

  document.getElementById("nomeTime").value = "";
  document.getElementById("cidadeTime").value = "";

  carregarTimes();
}

async function cadastrarJogador() {
  const nome = document.getElementById("nomeJogador").value;
  const posicao = document.getElementById("posicaoJogador").value;
  const idade = document.getElementById("idadeJogador").value;
  const time_id = document.getElementById("timeIdJogador").value;

  await fetch(`${API_URL}/jogadores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, posicao, idade, time_id }),
  });

  document.getElementById("nomeJogador").value = "";
  document.getElementById("posicaoJogador").value = "";
  document.getElementById("idadeJogador").value = "";
  document.getElementById("timeIdJogador").value = "";

  carregarJogadores();
}

carregarTimes();
carregarJogadores();