A browser-based Tic Tac Toe game with an unbeatable AI powered by the Minimax algorithm.
Built with  HTML, CSS, and JavaScript as a school project


Features

Unbeatable AI via Minimax — the AI never loses
Randomized sides — each new game randomly assigns who plays ☕ (X) or 🍪 (O)
Score tracking — persists across rounds without reloading
Sound effects — move, victory, and reset sounds
Winner highlight with pulsing animation on the winning row
Responsive layout using Bootstrap 5
Impressum / Imprint page included

Tech Stack
TechnologyUsageHTML5 / CSS3Structure JavaScriptGame logic & AIBootstrap 5Layout & componentsFont AwesomeIcons (☕ mug, 🍪 cookie)
How the AI Works
The AI uses the Minimax algorithm — a classic decision-tree search used in two-player zero-sum games.

It simulates every possible future move recursively
Assigns scores: +10 for AI win, -10 for player win, 0 for draw
Depth penalty encourages faster wins
Result: the AI always plays the optimal move → it cannot be beaten

minimax(depth, isMaximizing)
  → if AI wins: return 10 - depth
  → if human wins: return depth - 10
  → if draw: return 0
  → otherwise: try all moves, pick best score

  
Project Structure
├── index.html          # Main game page
├── impressum.html      # Imprint / legal info
├── script.js           # Game logic + Minimax AI
├── style.css           # Game styles
├── style_imprint.css   # Imprint page styles
├── background.jpeg     # Cocoa-themed background
├── favicon.png         # Coffee cup favicon
├── plop.mp3            # Move sound
├── victory.mp3         # Win sound
└── reset.mp3           # Reset sound


Getting Started
No build step required — just open index.html in any modern browser.
bashgit clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
# open index.html in your browser
