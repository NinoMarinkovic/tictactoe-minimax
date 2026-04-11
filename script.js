function init() {
  // ─── DOM Elements ───────────────────────────────────────────────────────────
  const boxes = [...document.querySelectorAll(".box")];
  const resetBtn = document.querySelector("#reset");
  const newGameBtn = document.querySelector("#new-btn");
  const msgContainer = document.querySelector(".msg-container");
  const msg = document.querySelector("#msg");
  const score1Text = document.querySelector("#score1");
  const score2Text = document.querySelector("#score2");
  const plopSound = new Audio("plop.mp3");
  const victorySound = new Audio("victory.mp3");
  const resetSound = new Audio("reset.mp3");

  // ─── Constants ──────────────────────────────────────────────────────────────
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  // ─── Game State ─────────────────────────────────────────────────────────────
  let humanPlayer = Math.random() < 0.5 ? "X" : "O";
  let aiPlayer = humanPlayer === "X" ? "O" : "X";
  let currentTurn = "X"; // X always starts
  let gameActive = true;
  let board = ["", "", "", "", "", "", "", "", ""];

  // Score persists across games intentionally — only resets on full page reload
  const score = { human: 0, ai: 0 };

  // ─── Rendering ──────────────────────────────────────────────────────────────
  const renderBoard = () => {
    boxes.forEach((box, i) => {
      if (board[i] === "O") {
        box.innerHTML = `<i class="fa-solid fa-cookie"></i>`;
        box.style.color = "rgb(83, 71, 55)";
        box.disabled = true;
      } else if (board[i] === "X") {
        box.innerHTML = `<i class="fa-solid fa-mug-saucer"></i>`;
        box.style.color = "rgb(83, 71, 55)";
        box.disabled = true;
      } else {
        box.innerHTML = "";
        box.disabled = !gameActive;
      }
    });
  };

  // ─── Helper Functions ───────────────────────────────────────────────────────
  const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
  };

  const getAvailableMoves = () => {
    return board.reduce((moves, cell, i) => {
      if (cell === "") moves.push(i);
      return moves;
    }, []);
  };

  // Used only inside minimax — checks if a player has won on the current board
  const hasWon = (player) => {
    return winPatterns.some(
      (pattern) =>
        board[pattern[0]] === player &&
        board[pattern[1]] === player &&
        board[pattern[2]] === player
    );
  };

  // ─── Minimax Algorithm ──────────────────────────────────────────────────────
  const minimax = (depth, isMaximizing) => {
    if (hasWon(aiPlayer)) return 10 - depth;
    if (hasWon(humanPlayer)) return depth - 10;
    if (board.every((cell) => cell !== "")) return 0;

    const moves = getAvailableMoves();
    let bestScore = isMaximizing ? -Infinity : Infinity;

    for (let i of moves) {
      board[i] = isMaximizing ? aiPlayer : humanPlayer;
      const moveScore = minimax(depth + 1, !isMaximizing);
      board[i] = "";
      bestScore = isMaximizing
        ? Math.max(bestScore, moveScore)
        : Math.min(bestScore, moveScore);
    }
    return bestScore;
  };

  // ─── Game Logic ─────────────────────────────────────────────────────────────
  const showWinner = (winner) => {
    if (winner === "Draw") {
      msg.innerText = "Unentschieden!";
    } else if (winner === humanPlayer) {
      msg.innerText = `Glückwunsch, Du hast gewonnen! (${humanPlayer})`;
      score.human++;
      score1Text.innerText = score.human;
    } else {
      msg.innerText = `Die KI hat gewonnen! (${aiPlayer})`;
      score.ai++;
      score2Text.innerText = score.ai;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
    victorySound.play();
    gameActive = false;
  };

  const checkWinner = () => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        boxes[a].classList.add("winner-highlight");
        boxes[b].classList.add("winner-highlight");
        boxes[c].classList.add("winner-highlight");
        showWinner(board[a]);
        return true;
      }
    }
    if (board.every((cell) => cell !== "")) {
      showWinner("Draw");
      return true;
    }
    return false;
  };

  const makeBestMove = () => {
    let bestScore = -Infinity;
    let move;

    for (let i of getAvailableMoves()) {
      board[i] = aiPlayer;
      const moveScore = minimax(0, false);
      board[i] = "";
      if (moveScore > bestScore) {
        bestScore = moveScore;
        move = i;
      }
    }

    if (move !== undefined) {
      plopSound.currentTime = 0;
      plopSound.play();
      board[move] = aiPlayer;
      renderBoard();
      if (checkWinner()) return;
      currentTurn = humanPlayer;
    }
  };

  const resetGame = () => {
    humanPlayer = Math.random() < 0.5 ? "X" : "O";
    aiPlayer = humanPlayer === "X" ? "O" : "X";
    currentTurn = "X";
    gameActive = true;
    board = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box) => box.classList.remove("winner-highlight"));
    renderBoard();
    resetSound.play();
    msgContainer.classList.add("hide");

    if (currentTurn === aiPlayer) {
      setTimeout(makeBestMove, 500);
    }
  };

  // ─── Event Listeners ────────────────────────────────────────────────────────
  boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
      if (!gameActive) return;
      if (board[i] !== "") return;
      if (currentTurn !== humanPlayer) return;

      plopSound.currentTime = 0;
      plopSound.play();

      board[i] = humanPlayer;
      renderBoard();

      if (checkWinner()) return;

      currentTurn = aiPlayer;
      setTimeout(() => {
        if (gameActive) makeBestMove();
      }, 500);
    });
  });

  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);

  // ─── Start ──────────────────────────────────────────────────────────────────
  if (currentTurn === aiPlayer) {
    setTimeout(makeBestMove, 500);
  }
}

// Start game on page load
init();