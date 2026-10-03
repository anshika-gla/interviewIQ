# 🤖 AI Interview Agent

An AI-powered interview preparation platform built with the **MERN Stack** that helps users practice technical and HR interviews through an intelligent AI interviewer.

The platform allows users to upload their resume, generate personalized interview questions, interact with an AI interviewer, and analyze their interview performance.

It also includes **Razorpay payment integration** for premium features and is designed for production deployment.

---
🌐 Live Demo
📊 Dashboard
https://interviewiq-1client-ewxy.onrender.com
🔗 Backend API
https://ola-ride-booking-sql-analysis-production.up.railway.app

## 🚀 Features

### 👤 User Authentication
- User registration and login
- Secure authentication
- User-specific interview sessions
- Protected routes

### 📄 Resume Upload
- Upload your resume
- Resume-based interview preparation
- Extract relevant information from the resume
- Generate personalized interview questions

### 🤖 AI Interview Agent
- AI-powered interview simulation
- Technical interview questions
- HR/behavioral questions
- Follow-up questions
- Interactive interview experience
- Real-time conversation with the AI interviewer

### 📊 Interview Analysis
- Interview performance evaluation
- AI-generated feedback
- Strengths and weaknesses
- Suggestions for improvement
- Interview performance summary

### 💳 Razorpay Integration
- Premium plan/payment integration
- Secure Razorpay checkout
- Payment verification
- Unlock premium interview features

### 📱 Responsive UI
- Modern user interface
- Responsive design
- Works across desktop, tablet, and mobile devices

### ☁️ Deployment
- Production-ready MERN architecture
- Frontend and backend can be deployed separately
- Environment-variable based configuration

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Axios

### Backend

- Node.js
- Express.js
- REST API
- JWT Authentication

### Database

- MongoDB
- Mongoose

### AI

- AI / LLM API
- Prompt-based interview generation
- AI-powered interview evaluation

### Payment

- Razorpay

### Tools

- Git
- GitHub
- Postman
- VS Code
- npm

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │                      │
                    │ • Authentication    │
                    │ • Resume Upload      │
                    │ • Interview UI       │
                    │ • Results Dashboard  │
                    └──────────┬───────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Express / Node.js  │
                    │      Backend         │
                    │                      │
                    │ • Auth APIs          │
                    │ • Resume APIs        │
                    │ • Interview APIs     │
                    │ • Payment APIs       │
                    └───────┬───────┬──────┘
                            │       │
                  ┌─────────┘       └──────────┐
                  ▼                            ▼
          ┌───────────────┐            ┌──────────────┐
          │    MongoDB    │            │   AI / LLM   │
          │   Database    │            │     API      │
          └───────────────┘            └──────────────┘
                                             │
                                             ▼
                                    AI Interview Feedback

                            ┌──────────────────┐
                            │     Razorpay     │
                            │     Payments     │
                            └──────────────────┘
