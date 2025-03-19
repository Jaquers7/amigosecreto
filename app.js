let amigo = [];
function adicionarAmigo(event) {
  let nomeInput = document.getElementById("amigo");
  let nome = nomeInput.value.trim();

  if (nome === "") {
    alert("O campo está vazio, digite o nome de um amigo");
  } else {
    amigo.push(nome); 
    nomeInput.value = "";
    exibirNomes();
  }
}

function exibirNomes() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigo.forEach(function(nome) {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigo.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigo.length);
  let amigoSorteado = amigo[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);
}
