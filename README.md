# 🌿 Plant Whisperer v2

A modular, interactive "Plant Personality" dashboard built for **Hack Club**. This project uses a custom logic engine to track your plant's health and translate its "vibes" into human thoughts.

![License](https://img.shields.io/badge/license-MIT-green)
![Hack Club](https://img.shields.io/badge/built%20for-Hack%20Club-red)

## 🚀 The Hack
Most plant trackers are boring. **Plant Whisperer** gives your greenery a soul. Depending on how much you "Check the Vibe," your plant consumes energy. If you don't hydrate it, its personality shifts from "Thriving" to "Sassy/Dramatic" or even "Critical."

## 🛠 Modular Architecture
The project is split into four distinct parts to keep the code clean and hackable:

- **`index.html`**: The UI layer built with Tailwind CSS.
- **`database.js`**: The personality storage. Add your own quotes here!
- **`engine.js`**: The mathematical brain that handles health and state logic.
- **`main.js`**: The bridge that connects the engine to the browser.

## 📦 Installation & Setup

Since this version is built to be **Local-Friendly**, you don't need a complex server setup.

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/glitch-runner.git](https://github.com/YOUR_USERNAME/glitch-runner.git)
Open the folder:
Navigate to the glitch runner directory.

Launch:
Simply double-click index.html to open it in your browser.

🎮 How to Play
Check Vibe: Click the green button to see how your plant is feeling. Warning: This drains 15% health!

Hydrate: If the health bar (at the top) gets low, click Hydrate Plant to restore 30% health.

Evolution: If the health drops below 40%, the plant's vocabulary changes to its "Struggling" state.

🤝 Contributing
Want to add more personalities?

Open database.js.

Add a new object to the healthy or dry arrays.

Submit a Pull Request!

Built with ❤️ for Hack Club.


---