let markedNumbers = 0;

// Gera 15 números únicos de 1 a 90, ordenados.
function generateRandomNumbers() {
  const numbers = new Set();
  while (numbers.size < 15) {
    const randomNum = Math.floor(Math.random() * 90) + 1;
    numbers.add(randomNum);
  }
  // Retorna como array e ordena numericamente para a cartela ficar mais limpa
  return Array.from(numbers).sort((a, b) => a - b);
}

function startGame() {
  const nameInput = document.getElementById("playerName").value.trim();
  const playerName = nameInput === "" ? "Jogador" : nameInput;

  // Configura textos com o nome do jogador
  document.getElementById("displayName").innerText = `Cartela de ${playerName}`;
  document.getElementById("winnerName").innerText = playerName;

  // Alterna visibilidade das telas
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("win-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  renderCard();
}

function renderCard() {
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = "";
  markedNumbers = 0; // Reseta a contagem

  const numbers = generateRandomNumbers();

  numbers.forEach((num) => {
    const box = document.createElement("div");
    box.className = "number-box";
    box.innerText = num;

    box.onclick = function () {
      // Alterna a classe 'marked' (marcado/desmarcado)
      if (this.classList.contains("marked")) {
        this.classList.remove("marked");
        markedNumbers--;
      } else {
        this.classList.add("marked");
        markedNumbers++;
      }

      checkWin();
    };

    cardElement.appendChild(box);
  });
}

function checkWin() {
  if (markedNumbers === 15) {
    // Pequeno delay para o jogador ver a última marcação
    setTimeout(() => {
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("win-screen").style.display = "block";
    }, 300);
  }
}

function resetApp() {
  document.getElementById("playerName").value = "";
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}
