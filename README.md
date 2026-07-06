# 💬 ChitChat

<p align="center">
  <strong>A full-stack MERN chat application for real-time one-to-one messaging.</strong>
</p>

<p align="center">
  Built with React, Node.js, Express, MongoDB, Socket.IO, JWT Authentication, Cloudinary, Tailwind CSS, and DaisyUI.
</p>

<p align="center">
  <a href="https://chit-chat-ddkk.onrender.com"><strong>🌐 Live Demo</strong></a>
  ·
  <a href="https://github.com/arpit571/ChitChat"><strong>📂 Repository</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-black?logo=socket.io" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</p>

---

# 📖 Overview

ChitChat is a full-stack MERN chat application that enables secure real-time communication between users. It supports user authentication, instant messaging, image sharing, customizable themes, and profile management.

The primary goal of this project was to strengthen practical full-stack development skills by implementing authentication, WebSocket communication, media uploads, state management, and deployment in a real-world application.

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* Secure JWT Authentication
* Protected Routes
* Persistent User Sessions
* Logout Functionality

---

## 💬 Messaging

* Real-time One-to-One Messaging
* Instant Message Delivery using Socket.IO
* Online User Status
* Read (Seen) Status
* Text Messaging
* Image Messaging

---

## 👤 User Profile

* Upload Profile Picture
* Cloudinary Image Storage
* Persistent Profile Data

---

## 🎨 User Experience

* Responsive Interface
* Multiple DaisyUI Themes
* Theme Persistence
* Toast Notifications
* Loading States

---

## 🛡️ Backend Features

* RESTful API
* JWT Authentication
* Cookie-based Authentication
* Password Hashing with bcrypt
* Security Middleware using Helmet
* Basic Rate Limiting
* MongoDB Integration with Mongoose

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* React Router
* React Hot Toast
* Lucide React
* Socket.IO Client

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* bcryptjs
* Cookie Parser
* Helmet
* Express Rate Limit
* Cloudinary
* dotenv

---

# 📁 Project Structure

```
ChitChat
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── lib
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── seeds
│   │   └── index.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── constants
│   │   ├── lib
│   │   ├── pages
│   │   ├── store
│   │   └── App.jsx
│   └── package.json
│
├── screenshots
├── .env.example
├── LICENSE
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/arpit571/ChitChat.git
cd ChitChat
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file using the provided `.env.example`.

Start the backend server:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Environment Variables

Create a `.env` file based on `.env.example`.

| Variable              | Description                       |
| --------------------- | --------------------------------- |
| PORT                  | Backend server port               |
| NODE_ENV              | Application environment           |
| MONGODB_URI           | MongoDB connection string         |
| JWT_SECRET            | Secret key for JWT authentication |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name             |
| CLOUDINARY_API_KEY    | Cloudinary API key                |
| CLOUDINARY_API_SECRET | Cloudinary API secret             |
| VITE_API_URL          | Backend API URL for frontend      |

---

# 🌐 Live Demo

Frontend

https://chit-chat-ddkk.onrender.com

---

# 📸 Screenshots

> Add your screenshots inside the `screenshots/` folder.

Suggested screenshots:

* Login Page
* Signup Page
* Chat Interface
* Profile Page
* Settings Page
* Coffee Theme
* Dark Theme

Example structure:

```
screenshots/
│
├── login.png
├── signup.png
├── chat.png
├── profile.png
├── settings.png
├── coffee-theme.png
└── dark-theme.png
```

---

# 🔧 Challenges & Improvements

While developing ChitChat, I encountered several practical challenges that helped improve my understanding of full-stack application development.

Some notable improvements made during development include:

* Fixed profile picture persistence after page refresh.
* Resolved theme compatibility by migrating to a stable Tailwind CSS and DaisyUI setup.
* Improved deployment configuration for production.
* Added message seen status.
* Enhanced repository documentation and project structure.
* Refined environment configuration for easier project setup.

---

# 📚 What I Learned

This project provided hands-on experience with:

* Building a full-stack MERN application
* Implementing JWT Authentication
* Working with Socket.IO for real-time communication
* Managing application state using Zustand
* Uploading and serving images using Cloudinary
* Designing RESTful APIs
* Using Express middleware for security
* Debugging deployment issues
* Managing environment variables
* Deploying full-stack applications on Render

---

# 🚀 Future Improvements

Some planned enhancements include:

* Group Chats
* Typing Indicator
* Emoji Reactions
* Message Search
* File Sharing
* Better Mobile Experience
* Chat Notifications
* Message Reply Feature

---

# 👨‍💻 Author

**Arpit Upadhyay**

GitHub:
https://github.com/arpit571

LinkedIn:
(Add your LinkedIn profile)

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.
