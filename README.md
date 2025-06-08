# trueGamble

**trueGamble** is a modern, web-based simulation of a gambling game designed for entertainment and educational purposes. The platform allows users to experience the thrill of betting and minesweeper-style gameplay in a risk-free, virtual environment. Built using vanilla HTML, CSS, and JavaScript, trueGamble demonstrates interactive front-end development techniques and clean UI/UX design patterns.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Gameplay Overview](#gameplay-overview)
- [Customization](#customization)
- [Known Issues and Roadmap](#known-issues-and-roadmap)
- [Contributing](#contributing)

---

## Features

- **Virtual Balance Tracking:**  
  Users start with a virtual balance and can place bets without risking real money.

- **Dynamic Bet Form:**  
  Easily set your bet amount and select the number of mines before each round.

- **Interactive Game Table:**  
  Play on a responsive 5x5 grid. The game logic is inspired by classic minesweeper mechanics.

- **Theme Toggle:**  
  Instantly switch between light and dark modes for a comfortable gaming experience.

- **Responsive UI:**  
  The layout adapts to various screen sizes for seamless play on desktop and mobile devices.

---

## Demo

> To try out trueGamble locally, follow the [Getting Started](#getting-started) instructions below.

---

## Technology Stack

- **Frontend:**  
  - HTML5 for structure  
  - CSS3 for styling and responsive design  
  - JavaScript (ES6+) for interactivity and game logic

- **No external libraries or frameworks** are required, making the project lightweight and easy to understand.

---

## Project Structure


- **index.html:**  
  Contains the main layout, including the balance display, bet form, and game table.

- **styles.css:**  
  Handles all styling, including theme switching and responsive design.

- **script.js:**  
  Implements the game logic, user interactions, and state management.

---

## Getting Started

1. **Clone the repository:**
    ```
    git clone https://github.com/harshitkowsik/trueGamble.git
    cd trueGamble
    ```

2. **Open the application:**
    - Open `index.html` in your preferred web browser.

3. **Start playing:**
    - Set your bet and number of mines.
    - Click "Start Game" to begin.
    - Interact with the game table to reveal tiles and try to avoid the mines.

---

## Gameplay Overview

- **Objective:**  
  Place a bet and try to reveal as many safe tiles as possible on the 5x5 grid without hitting a mine. The more safe tiles you reveal, the higher your potential reward.

- **Betting:**  
  Enter your desired bet amount and select the number of mines (difficulty level).

- **Game Table:**  
  - Each round, mines are randomly placed on the grid.
  - Click on tiles to reveal them.
  - If you hit a mine, you lose your bet.
  - If you reveal all safe tiles or cash out early (future feature), you win a calculated payout.

- **Balance:**  
  Your virtual balance updates automatically based on your wins and losses.

---

## Customization

- **Theme:**  
  Use the theme toggle button to switch between dark and light modes.

- **Game Parameters:**  
  You can easily adjust the starting balance, grid size, or mine count in the JavaScript code to create new game variations.

---

## Known Issues and Roadmap

- **Incomplete Game Logic:**  
  - The current version may have placeholder logic for mine placement and win/loss calculation.
  - Features like cash out, statistics tracking, and sound effects are planned for future updates.

- **Improvements:**  
  - Enhance mobile responsiveness.
  - Add animations and visual feedback.
  - Implement persistent user statistics using localStorage.

---

## Contributing

Contributions are welcome!  
If you'd like to add features, fix bugs, or improve the UI, please fork the repository and submit a pull request. For major changes, open an issue to discuss your ideas first.

---

**trueGamble** is a fun sandbox for learning and experimenting with interactive web development. Explore, play, and extend it as you like!
