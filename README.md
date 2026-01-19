# 🚀 Pulse — Real-Time Chat Platform (Web & Mobile)

**Pulse** is a cross-platform, real-time chat application built for **mobile and web**, powered by a shared backend and a custom real-time communication layer.

The project was built from scratch to explore **low-latency messaging**, **presence systems**, and **scalable backend architecture**, without relying on third-party real-time messaging services.

> **Tagline:** *Stay in sync.*

---

## ✨ Features

* 📱 **Fully Functional Mobile Chat App** (React Native)
* 💻 **Web Chat Application** (React) — same API, same features
* 💬 **Real-Time Messaging** (custom implementation)
* ⌨️ **Typing Indicators**
* 🟢 **Online / Offline Presence**
* 🔐 **Authentication with Clerk**
* 🌐 **Shared Backend for Web & Mobile**
* 🧠 **Custom WebSocket / Socket Server** (no Firebase / Pusher / Ably)
* 🚀 **Backend built with Bun, Express, MongoDB & TypeScript**
* 📡 **Real-Time Events & WebSocket Communication**
* 🛠️ **REST API Design & Implementation**
* 🎨 **Clean, Modern & Production-Ready UI**
* 📱 **Cross-Platform Support** (iOS, Android & Web)
* 🧪 **Error Monitoring & Crash Reporting** with **Sentry**
* 🚀 **Deployed on Sevalla** (Live API + Web App)

---

## 🧱 Architecture Overview

Pulse follows a **shared-backend, multi-client architecture**:

* **Mobile Client:** React Native (iOS & Android)
* **Web Client:** React
* **Backend:** Bun + Express + TypeScript
* **Database:** MongoDB
* **Real-Time Layer:** Custom WebSocket / Socket Server
* **Authentication:** Clerk (Web & Mobile SDKs)
* **Monitoring:** Sentry

Both web and mobile clients consume:

* The **same REST API**
* The **same WebSocket events**
* The **same authentication system**

---

## 🛠️ Tech Stack

### Frontend

* React
* React Native
* TypeScript
* Clerk Authentication

### Backend

* Bun
* Express.js
* TypeScript
* MongoDB
* WebSockets / Socket-based events

### DevOps & Tooling

* Sevalla (deployment)
* Sentry (error monitoring)
* Git & GitHub
* CodeRabbit (automated code reviews)

---

## 🔐 Authentication

Pulse uses **Clerk** for secure authentication across:

* Web (React)
* Mobile (React Native)
* Backend (Express SDK)

This ensures:

* Secure session handling
* Consistent authentication flow across platforms
* Clean separation of authentication and business logic

---

## 🌐 Real-Time Communication

Real-time features are implemented **without third-party messaging services**.

Implemented capabilities include:

* Message delivery events
* Typing indicators
* Online / offline presence updates
* Connection and disconnection handling

This provides full control over:

* Event design
* Performance optimization
* Scalability strategies

---

## 🧪 Monitoring & Stability

* Centralized error tracking using **Sentry**
* Crash reporting for both frontend and backend
* Improved observability during development and production

---

## 🌱 Development Workflow

This project follows a **real-world Git & GitHub workflow**:

* Feature branches
* Pull requests
* Code reviews
* Clean commit history

Automated tooling:

* 🤖 **CodeRabbit** for AI-assisted code reviews

---

## 🎯 Project Goals

Pulse was built to:

* Understand real-time system design
* Compare **React vs React Native** by building a real product
* Develop a production-ready cross-platform application
* Practice scalable backend and WebSocket architecture
* Ship a complete product, not just a demo

---

## 🚧 Roadmap

* Group chats
* Message reactions
* Media sharing
* Push notifications
* Message search
* Read receipts
* Rate limiting and spam protection

---

## 📸 Screenshots

> Screenshots and demos will be added soon.

---

## 📝 License

This project is created for **learning and portfolio purposes**.

---

## 🙌 Acknowledgements

* Open-source libraries and tools used in this project
* Community resources that helped shape real-time communication patterns
