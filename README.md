#  AI Email Generator Web App + Chrome Extension

A full-stack AI-powered application that intelligently generates context-aware email replies.  
This project integrates a **React.js frontend**, a **Spring Boot backend**, and a **Chrome Extension** that brings smart suggestions directly into your browser — perfect for Gmail or similar platforms.

Built with production-ready architecture and designed for real-world usability, this project demonstrates full-stack development, AI integration, and browser-based automation.

---

## 🚀 Features

- 🤖 **AI-Powered Responses** – Automatically generates email replies based on input prompts.
- 🌐 **Full-Stack Application** – Uses React.js (frontend) and Spring Boot (backend).
- 🧩 **Chrome Extension Integration** – Injects AI suggestions into your browser (e.g., Gmail).
- 📡 **REST API Communication** – Frontend communicates with backend via clean APIs.
- 💡 **Modular and Scalable** – Easily extendable architecture with clean code separation.

---

## 📁 Project Structure

AI-email-generator/
├── emailGenerator/ # 🔙 Backend - Spring Boot (Java)
│ ├── src/ # Java source code (controllers, services)
│ └── pom.xml # Maven build config
│
├── frontend/ # 🔛 Frontend - React.js
│ ├── src/ # Components, hooks, API services
│ ├── public/ # Static assets
│ └── package.json # Dependencies and scripts
│
├── EmailEX/ # 🧩 Chrome Extension
│ ├── manifest.json # Chrome extension manifest (v3)
│ ├── content.js # Injected content script
│ └── content.css # Extension styling
│
├── README.md # 📄 This file
└── .gitignore # Git ignored files


## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/AI-email-generator.git
cd AI-email-generator
```

---

### 2️⃣ Run the Backend (Spring Boot)

```bash
cd emailGenerator
./mvnw spring-boot:run
```

> Backend will start at: `http://localhost:8080`

---

### 3️⃣ Run the Frontend (React)

Open a **new terminal**:

```bash
cd frontend
npm install
npm start
```

> Frontend will run at: `http://localhost:3000`

---

### 4️⃣ Load the Chrome Extension

1. Open Google Chrome  
2. Go to `chrome://extensions`  
3. Enable **Developer Mode** (top-right toggle)  
4. Click **Load unpacked**  
5. Select the `EmailEX/` folder

✅ The extension is now ready and active in your browser!
