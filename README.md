# ⚡ AI Code Reviewer & Live Editor

An interactive full-stack code review tool powered by the Google Gemini API. Write code in an embedded Monaco Editor, request real-time feedback, and render syntax-highlighted Markdown suggestions instantly.

---

## 🚀 Key Features

* **Interactive Code Workspace:** Powered by `@monaco-editor/react` for an integrated development editor feel.
* **AI-Powered Code Reviews:** Backend integration with Google Gemini API to analyze syntax, optimize performance, and catch bugs.
* **Markdown & Syntax Highlighting:** Beautiful AI feedback formatting with `react-markdown` and `rehype-highlight` (GitHub Dark theme).
* **Decoupled Architecture:** Clean Separation of Concerns with Express routes, controllers, and services.

---

## 🛠️ Tech Stack

* **Frontend:** React, Monaco Editor, Axios, React Markdown, Rehype Highlight
* **Backend:** Node.js, Express.js
* **AI Engine:** Google Gemini API (`@google/genai`)

---

## 📁 Project Structure

```text
fullstack-project/
├── backend/
│   ├── config/
│   ├── src/
│   │   ├── Routes/
│   │   ├── controller/
│   │   └── service/
│   │       └── ai.service.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   └── src/
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd fullstack-project
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install express @google/genai dotenv cors

# Create .env file
# On Windows PowerShell: New-Item .env -Type File
# On Linux / Mac / Git Bash: touch .env
```

Add your Gemini API key inside `backend/.env`:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend server:
```bash
npm start
# or with nodemon:
npx nodemon server.js
```

---

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install @monaco-editor/react react-markdown rehype-highlight highlight.js axios

# Start the development server
npm run dev
```

---

## 📡 API Overview

* **Endpoint:** `POST /api/ai/get-review`
* **Payload:**
  ```json
  {
    "code": "console.log('Hello World');"
  }
  ```
* **Response:** Formatted Markdown response containing code review insights, bugs, and suggested improvements.

---

## 📄 License

Distributed under the MIT License.
