# ☕ Tic Tac Toe 

A browser Tic Tac Toe game with an unbeatable Minimax AI, sound effects and score tracking.

## Features

- 🔀 **Randomized sides** — each game randomly assigns ☕ (X) or 🍪 (O) to the player
- 🤖 **Unbeatable AI** — Minimax algorithm guarantees the AI never loses
- 🏆 **Score tracking** — scores persist across rounds without reloading
- 🔊 **Sound effects** — move, victory and reset sounds
- ✨ **Winner highlight** — pulsing animation on the winning row
- 📱 **Responsive** — works on all screen sizes via Bootstrap 5

## Tech Stack

```
Language   | HTML, CSS, JavaScript
Framework  | Bootstrap 5
Icons      | Font Awesome 6
AI         | Minimax Algorithm (vanilla JS)
Audio      | Web Audio API
```

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

## Getting Started

A modern browser. No build step, no dependencies, no server required.

## Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/tictactoe-minimax.git
```

**2. Open the game**
```bash
cd tictactoe-minimax
# open index.html in your browser
```

> ⚠️ Audio requires a user interaction before playing (browser autoplay policy).
> Click anywhere on the page first if sounds don't work.

## How to Play

| Action | Description |
|--------|-------------|
| Click a cell | Place your symbol |
| `Spielfeld leeren` | Reset the board, keep scores |
| `Neues Spiel` | Start a new round after a win |

## How the AI Works

```
minimax(depth, isMaximizing)
  → AI wins:    return 10 - depth
  → Human wins: return depth - 10
  → Draw:       return 0
  → else: try all moves, pick best score
```

The AI simulates every possible future move and always picks the optimal one — it **cannot be beaten**, only tied.

## Authors

| Name | Contact |
|------|---------|
| Nino Marinkovic | Nino.Marinkovic@hak-reutte.ac.at |
| Elias Haberl | Elias.Haberl@hak-reutte.ac.at |

**HTL Reutte** · Gymnasiumstrasse 8, 6600 Reutte · © 2026
