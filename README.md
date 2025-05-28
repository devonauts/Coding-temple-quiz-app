# 🎓 Mini Quiz App

A fun mini quiz application built with **React** and **Vite**, using the **Open Trivia Database API** to pull questions in real-time. This app allows you to:

✅ Enter your name, choose a category and difficulty  
✅ Fetch multiple-choice questions  
✅ Answer them and see your final score  
✅ Restart the quiz at any time!

---

## 🚀 Features

- Responsive **home page** with form inputs for name, category, and difficulty  
- **Question page** with dynamic radio buttons for answers  
- **Results page** that shows your score and correct answers  
- Smooth transitions and animations with **Framer Motion**  
- Styled using **CSS** for a clean, modern look  
- Uses **Open Trivia Database API** to fetch real-time trivia questions

---

## 🔧 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Open Trivia Database API](https://opentdb.com/)

---
```bash
## ⚙️ Getting Started

1️⃣ Clone the repo

git clone https://github.com/devonauts/Coding-temple-quiz-app.git
cd quiz-app
2️⃣ Install dependencies
npm install
3️⃣ Run the app
npm run dev
The app will be available at http://localhost:5173.

🛠️ Debugging with VS Code

If you want to debug your React app with VS Code and Chrome, make sure you have this in .vscode/launch.json:

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against Vite",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/src/*",
        "webpack:///./src/*": "${webRoot}/src/*",
        "vite:///src/*": "${webRoot}/src/*",
        "http://localhost:5173/src/*": "${webRoot}/src/*"
      }
    }
  ]
}
📦 Folder Structure

/quiz-app
  ├── public/
  ├── src/
  │   ├── components/       // React components
  │   ├── App.jsx           // Main App component
  │   ├── main.jsx          // Vite entry point
  │   └── styles.css        // App styling
  ├── .vscode/              // Debug config
  ├── package.json
  ├── vite.config.js
  └── README.md
🗺️ Future Improvements

Let users choose number of questions
Add score tracking and statistics
Support for different question types (True/False, etc.)
Add a dark mode toggle
🤝 Contributing

Feel free to open issues and PRs if you’d like to improve or add features!

📜 License

MIT License.

Enjoy playing the quiz! 🚀


---# Coding-temple-quiz-app
