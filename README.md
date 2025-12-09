# 🚀 Devin Patel — Portfolio Website

A **modern, responsive, and animated personal portfolio** built using **React + TypeScript**, styled with **Tailwind CSS** & **shadcn/ui**, and powered by **Vite** for a blazing-fast development experience.  
Designed to showcase **skills, projects, experience, and contact information** with a clean UI and smooth animations.

🔗 **Live Demo:** [https://portfolio-snowy-six-7x2zhhlu0x.vercel.app/](https://portfolio-snowy-six-7x2zhhlu0x.vercel.app/)

---

## 🛠️ Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Tailwind CSS
- shadcn/ui components
- Framer Motion (for animations)

### Utilities
- EmailJS (contact form integration)
- Lucide Icons
- Custom Assets & Static Images

---

## ✨ Features

### 🎨 Modern UI / UX
- Fully responsive design
- Smooth animations using Framer Motion
- Clean glassmorphism & gradient aesthetic

### 🧩 Modular Components
- Reusable sections: Hero, About, Skills, Projects, Contact, Footer
- Organized folder structure for scalability

### 📬 Contact Form with EmailJS
- Works seamlessly without a backend
- Sends messages directly to your email
- Includes form validation & success/error notifications

### 🖼️ Static Asset Management
- Centralized exports using `src/assets/index.ts`
- Compatible with TypeScript typings for image imports

### ⚡ Lightning-Fast Development
- Built with Vite & HMR (Hot Module Replacement)
- Extremely lightweight and fast build times

---

## 📂 Folder Structure

src/
├── assets/ # Images, icons, static files
│ └── index.ts # Centralized asset exports
├── components/ # Reusable UI components
├── sections/ # Main sections: Hero, About, Projects, Contact...
├── lib/ # Utilities, animations, constants
├── App.tsx
└── main.tsx


---

## 📧 EmailJS Setup (Contact Form)

Make sure you have the following fields in your EmailJS template:

{{to_name}}
{{from_name}}
{{from_email}}
{{subject}}
{{message}}


**Example usage in React:**


const templateParams = {
to_name: "Devin",
from_name: formData.name,
from_email: formData.email,
subject: formData.subject,
message: formData.message,
};


---

## 🚀 Getting Started (Local Development)

### Step 1: Clone the Repository

git clone <YOUR_GITHUB_REPO_URL>
cd <YOUR_PROJECT_NAME>


### Step 2: Install Dependencies

npm install


### Step 3: Start Development Server

npm run dev


👉 Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

npm run build

Preview your optimized build with:

npm run preview


---

## 🌐 Deployment 

### Option 1: **Manual Deployment**
Use your preferred platform:
- **Netlify**
- **Vercel**
- **GitHub Pages** (requires slight Vite config adjustment)

---

## 🧠 Editing Your Application

### Option 1: **Using Local IDE**

Clone your repo
git clone <YOUR_GIT_URL>

Navigate into folder
cd <YOUR_PROJECT_NAME>

Install dependencies
npm install

Run locally
npm run dev


### Option 3: **Edit directly on GitHub**
- Go to the file
- Click **Edit (🖊️)** in the corner
- Save & commit your edits

### Option 4: **Use GitHub Codespaces**
1. Go to your GitHub repository
2. Click **Code → Codespaces → New codespace**
3. Edit directly in browser
4. Commit and push your updates

---

## 📄 License

This project is open for **personal use** only.  
Using or reselling this as a public template without permission is **not allowed**.

---

## 👨‍💻 Author

**Devin Patel**

- 🌐 **Portfolio:** [Live Project](https://portfolio-snowy-six-7x2zhhlu0x.vercel.app/)  
- 💻 **GitHub:** [https://github.com/devinpatel26](https://github.com/devinpatel26)  
- 🔗 **LinkedIn:** [https://www.linkedin.com/in/devin-patel-1b3464290/](https://www.linkedin.com/in/devin-patel-1b3464290/)
