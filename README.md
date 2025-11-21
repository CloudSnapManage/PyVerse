# PyVerse: 3D Python Odyssey 🌌🐍

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=github)](https://cloudsnapmanage.github.io/PyVerse/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

> **An immersive 3D interactive journey to master Python.**  
> Travel through the Constellation of Code, unlocking nodes from Variables to Advanced Metaprogramming with an AI-powered tutor.

---

## 🚀 Live Demo

Experience the simulation directly in your browser:  
**[Launch PyVerse](https://cloudsnapmanage.github.io/PyVerse/)**

---

## ✨ Features

*   **🌌 3D Visualization**: Navigate a stunning 3D constellation of learning nodes using **React Three Fiber**.
*   **🧠 50 Interactive Levels**: A comprehensive curriculum covering:
    *   **Basics**: Variables, Data Types, Loops.
    *   **Data Structures**: Lists, Dictionaries, Sets, Tuples.
    *   **OOP**: Classes, Inheritance, Magic Methods.
    *   **Advanced**: Decorators, Generators, Async/Await, Metaprogramming.
*   **🤖 AI-Powered Tutor**: Integrated with **Google Gemini API** for:
    *   Real-time code analysis and grading.
    *   Context-aware hints (Conceptual & Solution-based).
    *   Dynamic feedback on logic errors.
*   **⚡ Hybrid Grading Engine**:
    *   **Online**: Uses LLM for deep semantic understanding of your code.
    *   **Offline**: Fallback Regex pattern matching works without an API key.
*   **🎮 Gamification**: Unlock progression system, visual feedback, and persistent save states.

---

## 🛠️ Tech Stack

*   **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language**: TypeScript
*   **3D Engine**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (@react-three/drei)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai)

---

## 💻 Getting Started Locally

Follow these steps to run the mission simulation on your local machine.

### Prerequisites
*   Node.js (v16+)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/CloudSnapManage/PyVerse.git
    cd PyVerse
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🔑 Configuration (AI Features)

PyVerse works out-of-the-box in **Offline Mode**. To enable the AI Tutor:

1.  Get a free API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Launch the app.
3.  In the Main Menu (or within the Level Editor), enter your **Gemini API Key**.
4.  The key is stored securely in your browser's `localStorage`.

---

## 📂 Project Structure

```text
PyVerse/
├── components/         # React UI & 3D Components
│   ├── GameScene.tsx   # Main 3D Canvas
│   ├── LevelNode.tsx   # Interactive 3D Nodes
│   ├── LessonModal.tsx # Coding Interface & Terminal
│   └── ...
├── data/
│   └── staticLessons.ts # Curriculum Data (Questions, Regex, Tutorials)
├── services/
│   └── geminiService.ts # AI Integration Logic
├── types.ts            # TypeScript Interfaces
└── App.tsx             # Main Entry Point
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the curriculum or add new visual features:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/CloudSnapManage">CloudSnapManage</a>
</p>