# Christian Rhyss R. Jimenez - Portfolio

A modern, full-stack developer portfolio built with React Router v8 Framework Mode, showcasing expertise in web development, AI/ML systems, and cloud-native applications.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rjmn02/portfolio-site)

## 🚀 About Me

Full-stack developer and Computer Science graduate from Ateneo de Davao University (President's Lister, Dean's Lister). I specialize in building end-to-end web applications with modern tools like Next.js, FastAPI, NestJS, and PostgreSQL, with strong foundations in authentication/authorization (JWT, RBAC), API design, and database architecture.

📍 **Location:** Davao City, Philippines  
📧 **Email:** rhyssjmn@gmail.com  
🔗 **GitHub:** [@rjmn02](https://github.com/rjmn02)  
🔗 **LinkedIn:** [Christian Rhyss Jimenez](https://linkedin.com/in/christian-rhyss-jimenez-b8752a29a)

## 🛠️ Tech Stack

### Languages & Frontend
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

### Backend & Databases
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)

### AI/ML & Cloud
![Groq](https://img.shields.io/badge/Groq-000000?logo=groq&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging_Face-FFD200?logo=huggingface&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

## 🔧 Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm or bun

### Installation

```bash
npm install
```

### Development Server

Start the development server with Hot Module Replacement:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Type Checking

Generate types and run TypeScript check:

```bash
npm run typecheck
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## 📁 Project Structure

```
app/
├── root.tsx              # Root layout with Navbar, Footer, error boundary
├── routes.ts             # Route configuration
├── routes/
│   ├── home.tsx          # Home page (Hero, About, Skills, Experience)
│   ├── projects.tsx      # Projects showcase
│   └── resume.tsx        # Resume page with PDF viewer
├── components/
│   ├── ui/               # shadcn/ui components (button, card, badge)
│   ├── Hero.tsx          # Hero section with typewriter effect
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Featured projects grid
│   ├── Navbar.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   └── DotGrid.tsx       # Animated background grid
└── lib/
    ├── utils.ts          # cn() helper for conditional class merging
    └── cv-data.ts        # Centralized CV/resume data
```

## 🏗️ Key Features

- **React Router v8 Framework Mode** - Full SSR with type-safe routes
- **Motion** - Smooth animations and transitions
- **shadcn/ui** - Reusable, accessible UI components with Tailwind CSS
- **Dark Mode** - Enabled by default
- **JetBrains Mono Variable** - Monospace font for code aesthetics

## 📊 Projects Featured

1. **Retrieval-Augmented Chatbot for Traffic Regulations** - Undergraduate thesis project achieving 75-77% response relevance using LLaMA3-8B with RAG pipeline
2. **Healthcare Management Information System** - Full-stack platform with 5-role RBAC system built for MARIAN-TBI
3. **Vehicle Management System** - Fleet management system with JWT auth and audit logging
4. **Book Management System** - REST API with clean architecture and Swagger documentation

## 🚀 Deployment

### Docker

```bash
docker build -t portfolio-site .
docker run -p 3000:3000 portfolio-site
```

### Static + Server

The build output contains:

```
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Deploy the `build/` directory to any platform supporting Node.js deployment.

## 📄 License

This project is available for review of my work and experience. Feel free to explore the codebase and reach out if you'd like to connect!