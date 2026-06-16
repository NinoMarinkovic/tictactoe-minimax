# ☕ Tic Tac Toe — Minimax AI

A browser-based Tic Tac Toe game with an unbeatable Minimax AI, sound effects and score tracking. Built with vanilla JavaScript as a school project.

[![GitHub](https://img.shields.io/badge/GitHub-NinoMarinkovic%2Ftictactoe--minimax-181717?logo=github)](https://github.com/NinoMarinkovic/tictactoe-minimax)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## Tech Stack

**Languages:** HTML, CSS, JavaScript  
**Framework:** Bootstrap 5  
**Icons:** Font Awesome 6  
**AI:** Minimax Algorithm (vanilla JS)  
**Audio:** Web Audio API  

---

## Features

- **Randomized sides** — each game randomly assigns ☕ (X) or 🍪 (O) to the player
- **Unbeatable AI** — Minimax algorithm guarantees the AI never loses
- **Score tracking** — scores persist across rounds without reloading
- **Sound effects** — move, victory and reset sounds
- **Winner highlight** — pulsing animation on the winning row
- **Responsive** — works on all screen sizes via Bootstrap 5

---

## Project Structure

```
tictactoe-minimax/
├── index.html           # Main game page
├── impressum.html       # Imprint / legal info
├── script.js            # Game logic + Minimax AI
├── style.css            # Game styles
├── style_imprint.css    # Imprint page styles
├── background.jpeg      # Cocoa-themed background
├── favicon.png          # Coffee cup favicon
├── plop.mp3             # Move sound
├── victory.mp3          # Win sound
└── reset.mp3            # Reset sound
```

---

## Getting Started

No build step, no dependencies, no server required — just a modern browser.

```bash
git clone https://github.com/NinoMarinkovic/tictactoe-minimax.git
cd tictactoe-minimax
# open index.html in your browser
```

> ⚠️ Audio requires a user interaction before playing (browser autoplay policy). Click anywhere on the page first if sounds don't work.

---

## How to Play

| Action | Description |
|--------|-------------|
| Click a cell | Place your symbol |
| Spielfeld leeren | Reset the board, keep scores |
| Neues Spiel | Start a new round after a win |

---

## How the AI Works

```
minimax(depth, isMaximizing)
  → AI wins:    return 10 - depth
  → Human wins: return depth - 10
  → Draw:       return 0
  → else: try all moves, pick best score
```

The AI simulates every possible future move and always picks the optimal one — it cannot be beaten, only tied.

---

## License

MIT — see [LICENSE](LICENSE)
