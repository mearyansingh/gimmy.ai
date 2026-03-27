# 🏋️ gimmy.ai – AI Gym Planner

gimmy.ai is a **full-stack AI-powered fitness application** that generates **personalized workout plans** based on each user's goals, preferences, and constraints. Built using the **PERN stack** and powered by **OpenAI**, it demonstrates how modern AI applications are **designed, structured, and shipped** in production.

---

## 🚀 Features

* 🤖 **AI-Powered Workout Plans**

  * Generates fully customized workout routines using OpenAI
* 🔐 **Authentication (NeonAuth)**

  * Secure user login and session management
* 🧭 **Guided Onboarding Flow**

  * Collects user goals, fitness level, and constraints
* 🎯 **Personalized Experience**

  * Tailored plans based on user-specific inputs
* 📱 **Responsive UI**

  * Optimized for mobile and desktop devices
* 🌐 **Modern Landing Page**

  * Clean, conversion-focused design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* TypeScript
* Vite

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* NeonAuth

### AI Integration

* OpenAI API

---

## ⚙️ Architecture Overview

* **Client (React + Vite)** handles UI and onboarding flow
* **Server (Express)** manages API routes and business logic
* **Database (PostgreSQL)** stores user data and preferences
* **OpenAI API** generates dynamic workout plans
* **Authentication Layer (NeonAuth)** secures user sessions

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/gimmy.ai.git

# Navigate to project
cd gimmy.ai

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
OPENAI_API_KEY=your_openai_key
DATABASE_URL=your_postgres_url
AUTH_SECRET=your_auth_secret
```

---

## 🧪 Future Enhancements

* 📊 Workout analytics & progress tracking
* 🧠 Smarter AI recommendations
* 📅 Calendar-based workout scheduling
* 💬 AI fitness coach chat

---

## 📌 Learnings

This project demonstrates:

* Building **real-world AI-powered applications**
* Structuring **scalable full-stack architectures**
* Integrating **LLMs into production workflows**
* Designing **user-centric onboarding experiences**

---

## 📄 License

MIT License

---

## 🙌 Acknowledgements

* OpenAI for AI capabilities
* NeonAuth for authentication
* PostgreSQL ecosystem

---

> Built with 💪 to redefine personalized fitness using AI.

npx prisma@latest init => initialise prisma Initialized Prisma in your project
```prisma/
    schema.prisma
  prisma.config.ts```

  npx prisma migrate dev --name init
  npx prisma migrate dev --name plans

  npx prisma generate  


  CONNECT EXISTING DATABASE:
  1. Configure your DATABASE_URL in prisma.config.ts
  2. Run prisma db pull to introspect your database.

CREATE NEW DATABASE:
  Local: npx prisma dev (runs Postgres locally in your terminal)
  Cloud: npx create-db (creates a free Prisma Postgres database)

Then, define your models in prisma/schema.prisma and run prisma migrate dev to apply your schema.

Learn more: https://pris.ly/getting-started
npx prisma@latest db pull => pull database schema
npx prisma@latest generate => generate prisma client
npx prisma@latest studio => open prisma studio  