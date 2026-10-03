InterviewIQ — AI Interview Preparation Platform
Practice smarter. Interview better.
InterviewIQ is a full-stack AI-powered interview preparation platform that turns a candidate's resume, target role, skills, and experience into a personalized mock interview. It generates interview questions, evaluates answers, and provides performance insights so candidates can identify areas for improvement.

Live Demo
Launch InterviewIQ
Repository: https://github.com/anshika-gla/interviewIQ
Features
- Resume Upload & Analysis
- Upload a PDF resume.
- Extract resume text from all pages.
- Use AI to identify role, experience, projects, and skills.
- AI-Powered Interview Generation
- Generate personalized interview questions using the candidate's resume and selected role.
- Questions progress from easy to medium to hard.
- Supports resume-, project-, and skill-based questioning.
- Interactive Mock Interview
- Answer generated questions one by one.
- Individual questions have configurable time limits.
- Supports follow-up evaluation through the interview workflow.
- AI Answer Evaluation
- Evaluates answers on:
  - Confidence
  - Communication
  - Correctness
- Generates a final score and concise feedback for each response.
- Interview Performance Report
- Overall interview score
- Confidence score
- Communication score
- Correctness score
- Question-wise scores and feedback
- Previous interview history
- Authentication
- Google-based authentication flow.
- HTTP-only cookie-based token session.
- Protected interview and payment routes.
- Razorpay Payment Integration
- Create payment orders.
- Verify Razorpay signatures.
- Add purchased interview credits to the user's account.
- Cloud Deployment
- Frontend deployed on Render.
- MongoDB Atlas used for cloud database storage.
How InterviewIQ Works
                    ┌──────────────────────┐
                    │      User Login      │
                    │   Google Auth Flow   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Upload Resume     │
                    │       PDF File       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   PDF Text Parsing   │
                    │      pdfjs-dist      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      AI Analysis     │
                    │      OpenRouter      │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Generate Interview   │
                    │     Questions        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Candidate Answers  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    AI Evaluation     │
                    │ Confidence / Comm.   │
                    │      / Correctness   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Performance Report   │
                    │    & Interview Data  │
                    └──────────────────────┘
Architecture
InterviewIQ follows a client-server architecture:
┌───────────────────────────────────────────────┐
│                 React Client                  │
│                                               │
│  Authentication │ Interview UI │ Dashboard   │
│  Resume Upload  │ Questions    │ Reports     │
└───────────────────────┬───────────────────────┘
                        │
                  REST API / Axios
                        │
                        ▼
┌───────────────────────────────────────────────┐
│              Node.js + Express Server         │
│                                               │
│ Auth │ User │ Interview │ Payment Controllers│
│ Middleware │ PDF Processing │ AI Service      │
└───────────────┬───────────────┬───────────────┘
                │               │
                ▼               ▼
       ┌──────────────┐  ┌──────────────────┐
       │ MongoDB      │  │ OpenRouter AI    │
       │ / Atlas      │  │ GPT-4o-mini      │
       └──────────────┘  └──────────────────┘
                │
                ▼
       ┌──────────────────┐
       │ Razorpay Payment │
       └──────────────────┘
Tech Stack
Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React Router
- Redux Toolkit
- Axios
- Recharts
- React Icons
- Vite
- Firebase
Backend
- Node.js
- Express.js
- REST APIs
- Axios
- CORS
- Cookie Parser
- dotenv
- JSON Web Token
- Multer
Database
- MongoDB
- MongoDB Atlas
- Mongoose
AI & Resume Processing
- OpenRouter API
- OpenAI GPT-4o-mini through OpenRouter
- PDF.js (pdfjs-dist)
- AI-based resume extraction
- AI question generation
- AI answer evaluation
- Personalized feedback
Payments
- Razorpay
- Payment order creation
- HMAC-SHA256 signature verification
Development & Deployment
- Git
- GitHub
- VS Code
- Postman
- npm
- Vite
- Render
- MongoDB Atlas
Project Structure
interviewIQ/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── package.json
│
└── README.md
