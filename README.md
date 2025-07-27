#  AI Email Generator Web App + Chrome Extension

An AI-powered application that helps users generate intelligent and context-aware email replies. This full-stack project consists of a **Spring Boot backend**, a **React.js frontend**, and a smart **Chrome extension** to bring AI email suggestions directly into your browser.

---

## 📁 Project Structure

AI-email-generator/
│
├── EmailEX/ # 🧩 Chrome extension
│ └── manifest.json
│ └── content.css
│ └── content.js
│
├── frontend/ # 🔛 React.js frontend
│ └── public/
│ └── src/
│ └── package.json
│
├── emailGenerator/ # 🔙 Spring Boot backend (Java)
│ └── src/
│ └── pom.xml
│
├── README.md # 📝 Project documentation
└── .gitignore
## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2. Run backend from `/emailGenerator` using:
./mvnw spring-boot:run

### 3. Run frontend from `/frontend` using:
  npm install
  npm start

## 4. Load Chrome extension from `/EmailEX` at `chrome://extensions`

Done 🎉
