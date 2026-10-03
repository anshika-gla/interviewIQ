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
Backend API
Authentication
Method	Endpoint	Purpose
POST	/api/auth/google	Authenticate/create user
GET	/api/auth/logout	Logout user


Interview
Method	Endpoint	Purpose
POST	/api/interview/resume	Upload and analyze resume
POST	/api/interview/generate-questions	Generate personalized questions
POST	/api/interview/submit-answer	Submit and evaluate an answer
POST	/api/interview/finish	Complete interview and calculate scores
GET	/api/interview/get-interview	Get user's interview history
GET	/api/interview/report/:id	Get a specific interview report


Payments
Method	Endpoint	Purpose
POST	/api/payment/order	Create Razorpay order
POST	/api/payment/verify	Verify payment and add credits


AI Interview Pipeline
1. Resume Analysis
The backend accepts a PDF through Multer, extracts text from each page using pdfjs-dist, cleans the extracted text, and sends it to the AI service for structured extraction.
The AI extracts:
{
  "role": "string",
  "experience": "string",
  "projects": ["project1", "project2"],
  "skills": ["skill1", "skill2"]
}
2. Question Generation
The system combines:
- Target role
- Experience
- Interview mode
- Resume text
- Projects
- Skills
The AI generates five questions with an easy → medium → hard progression.
3. Answer Evaluation
Each submitted answer is evaluated on:
Confidence
Communication
Correctness
The final score is calculated from these evaluation dimensions and stored with the interview.
4. Performance Report
After the interview, InterviewIQ calculates:
- Final score
- Average confidence
- Average communication
- Average correctness
- Question-wise scores
- Question-wise feedback
Payment & Credit System
InterviewIQ uses Razorpay for premium interview credits.
Payment flow:
User selects plan
      ↓
Create Razorpay Order
      ↓
Complete Payment
      ↓
Receive Payment Details
      ↓
Verify HMAC Signature
      ↓
Mark Payment as Paid
      ↓
Add Credits to User
Payment verification uses an HMAC-SHA256 signature generated using the Razorpay secret key.
Environment Variables
Create .env files for the required secrets.
Server
PORT=8000

MONGODB_URI=your_mongodb_connection_string

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

JWT_SECRET=your_jwt_secret
Client
Use the environment variables required by the client configuration, for example:
VITE_API_URL=your_backend_url
Never commit real API keys, database credentials, JWT secrets, or payment secrets to GitHub.

Run Locally
1. Clone the repository
git clone https://github.com/anshika-gla/interviewIQ.git
cd interviewIQ
2. Start the backend
cd server
npm install
npm run dev
The backend runs on the configured PORT (8000 by default).
3. Start the frontend
Open another terminal:
cd client
npm install
npm run dev
Vite will provide the local development URL.
Security Considerations
- API secrets are stored through environment variables.
- Authentication uses HTTP-only cookies.
- Protected interview/payment routes use authentication middleware.
- Razorpay payment signatures are verified server-side.
- Uploaded resume files are processed on the server and removed after processing.
- CORS is configured for the deployed frontend.
Future Improvements
- Voice-based mock interviews
- Speech-to-Text and Text-to-Speech
- Video interview mode
- ‍ More specialized interviewer personas
- Advanced performance analytics
- Personalized interview preparation plans
- Adaptive difficulty based on previous performance
- Support for additional document formats
- Dockerized deployment
- Automated CI/CD pipeline
Why InterviewIQ?
Traditional interview preparation often requires manually searching for questions and evaluating your own answers.
InterviewIQ brings the process into one platform:
Your Resume
     ↓
Your Skills & Experience
     ↓
AI-Generated Questions
     ↓
Mock Interview
     ↓
AI Evaluation
     ↓
Performance Insights
