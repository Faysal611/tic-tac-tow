# ❌ Tic-Tac-Toe ⭕

Welcome to a beautifully designed, interactive **Tic-Tac-Toe** game built using vanilla web technologies. Hop right in, challenge a friend, and start playing!

---

## 🚀 Features

* **Beautiful UI:** A clean, modern layout utilizing custom typography and modern CSS styling.
* **Live Score Board:** Track wins effortlessly across multiple games.
* **Reset Button:** Clear the board and reset the entire score sheet back to zero instantly.
* **Smart State Validation:** Prevents illegal moves on cells that are already occupied.

---

## 🛠️ Tech Stack

* **HTML5** - Structure and layouts using semantic elements.
* **CSS3** - Sleek layouts, custom fonts, transitions, and responsive grid centering.
* **JavaScript (ES6+)** - Factory functions, state tracking, win-checking algorithms, and DOM manipulation.

---

## 🧠 Key Challenges & Solutions

### 1. Structuring the JavaScript Code
**The Challenge:** Managing state and avoiding global pollution for players while checking for 8 different win conditions (rows, columns, diagonals). 
**The Solution:** Implemented a **factory function** (`createPlayer`) to encapsulate player identities, scoring, and turn calculations cleanly. The grid utilizes custom HTML `data-value` attributes mapped seamlessly to a flat 9-element array state.

### 2. Async Syncing: Text Overlays & Timers
**The Challenge:** Displaying the winner's declaration text without instantly wiping the grid state or leaving the text stuck on screen permanently. 
**The Solution:** Orchestrated a series of `setTimeout()` handlers to sync CSS opacity transitions (`result.style.opacity = "1"`). The winner's text shows up seamlessly, fades out cleanly after 2 seconds, and *then* initializes `newGame()` smoothly behind the scenes.

---

## 🕹️ How to Play

1. Clone or download this repository.
2. Open `index.html` in your favorite browser.
3. Player 1 starts as **X**, and Player 2 follows as **O**.
4. The first to align three identical symbols wins the round!