export const CV_DATA = {
  name: "Christian Rhyss R. Jimenez",
  location: "Davao City, Philippines",
  email: "rhyssjmn@gmail.com",
  phone: "+63 991 218 5656",
  github: "https://github.com/rjmn02",
  linkedin: "https://linkedin.com/in/christian-rhyss-jimenez-b8752a29a",
  about: `I'm Christian Rhyss Jimenez, a full-stack developer and Computer Science graduate from Ateneo de Davao University (President's Lister, Dean's Lister). I specialize in building end-to-end web applications with modern tools like Next.js, FastAPI, NestJS, and PostgreSQL, with a strong foundation in security, API design, and database architecture.
  
Outside of development, I'm into mechanical keyboards and gaming, and I find joy in coffee, cars, movies, and anime, interests that keep me always exploring something new.`,
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "Next.js",
    "React.js",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "TanStack Table",
    "HTML",
    "FastAPI",
    "NestJS",
    "REST API",
    "RBAC",
    "JWT",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "SQLAlchemy",
    "RAG Pipelines",
    "Groq API",
    "Hugging Face Embeddings",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Bruno",
    "Swagger",
    "Claude Code",
    "Cisco Certified Network Associate (CCNA)",
    "Cisco Network Security",
    "Cisco Packet Tracer",
    "Cebuano",
    "Tagalog",
    "English"
  ],
  skillCategories: {
    "Languages": ["TypeScript", "JavaScript", "Python", "Java"],
    "Frontend": ["Next.js", "React.js", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Table", "HTML"],
    "Backend": ["FastAPI", "NestJS", "REST API", "RBAC", "JWT"],
    "Databases & ORM": ["PostgreSQL", "Supabase", "Prisma", "SQLAlchemy"],
    "AI/ML": ["RAG Pipelines", "Groq API", "Hugging Face Embeddings"],
    "Developer Tools": ["Git", "GitHub", "Bruno", "Postman", "Docker", "Swagger", "Claude Code", "Cisco Packet Tracer"],
    "Certifications": ["Cisco Certified Network Associate (CCNA)", "Cisco Network Security"],
    "Languages Spoken": ["Cebuano", "Tagalog", "English"],
  },
  experience: [
    {
      role: "Software Developer Intern",
      org: "Clever Kobweb",
      dates: "May 2025 – June 2025",
      description: [
        "Independently delivered a full-stack Vehicle Management System end-to-end, meeting 100% of client requirements within a 200+ hour development timeline.",
        "Owned authentication and security design, including cookie-based JWT sessions, bcrypt password hashing, and RBAC authorization across Admin/Staff roles."
      ]
    },
    {
      role: "Backend Developer",
      org: "Ateneo SAMAHAN System Developers",
      dates: "August 2025 – June 2026",
      description: [
        "Collaborated with a student development team building backend services for internal university systems using robust API design patterns and cloud-native deployment strategies."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Ateneo de Davao University",
      location: "Davao City, PH",
      awards: "President's Lister (2022-2023), Dean's Lister (2023-2024, 2026)"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Retrieval-Augmented Chatbot for Traffic Regulations",
      description: "Undergraduate Thesis",
      tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "Groq LLM", "Hugging Face Embeddings"],
      github: "https://github.com/rjmn02/trafficlaw_chatbot",
      demo: "https://trafficlaw-chatbot.vercel.app",
      details: [
        "Achieved 75-77% response relevance in human evaluation by building a retrieval-augmented chatbot using LLaMA3-8B grounded on Philippine traffic regulation documents.",
        "Mitigated LLM hallucination risks by implementing an embedding similarity search pipeline that goes through 20+ documents to retrieve relevant contexts before generating responses.",
        "Implemented conversation memory management with 6-message context windowing to preserve dialogue coherence, and constructed a 79-question evaluation suite to benchmark retrieval accuracy across varying query complexity and regulatory domains."
      ]
    },
    {
      id: 2,
      title: "Healthcare Management Information System",
      description: "Commissioned Academic Project",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "shadcn/ui", "TanStack Table"],
      github: "https://github.com/rjmn02/cancercompanion",
      demo: "https://youtu.be/od5DTR3hu5g",
      details: [
        "Delivered a full-stack healthcare management platform for cancer patients in collaboration with MARIAN-TBI (DOST-incubated startup), implementing a 5-role RBAC system (Patient, Caretaker, Doctor, Medical Staff, Admin) with middleware-enforced route protection and Google OAuth authentication.",
        "Designed a polymorphic task management architecture supporting 5 clinical categories (medication, treatment, appointments, exercise, general) with priority queues, prerequisite chaining, and delegated access patterns enabling role-based task manipulation on patient records.",
        "Integrated Supabase SSR for secure session handling and built dynamic data tables using TanStack React Table with server-side filtering, enabling real-time clinical data visualization backed by middleware-based, role-scoped access control to segregate sensitive patient data."
      ]
    },
    {
      id: 3,
      title: "Vehicle Management System",
      description: "Software Developer Intern (Clever Kobweb Remote)",
      tech: ["FastAPI", "React", "Vite", "SQLAlchemy", "JWT", "TanStack Table"],
      github: "https://github.com/rjmn02/ojt-project",
      demo: "#",
      details: [
        "Built a full-stack vehicle fleet management system from the ground up, using FastAPI's async endpoints for concurrent vehicle data operations and React Query for optimized client-side state management.",
        "Implemented cookie-based JWT authentication with bcrypt password hashing and RBAC authorization for Admin/Staff roles, and designed a custom, lightweight audit logging system from scratch to track user actions and record data changes for accountability.",
        "Built responsive data grids with TanStack Table featuring multi-column filtering, pagination, and real-time search, reducing data retrieval latency through SQLAlchemy's async engine and asyncpg driver optimizations."
      ]
    },
    {
      id: 4,
      title: "Book Management System",
      description: "RESTful API Backend",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Zod Validation"],
      github: "https://github.com/rjmn02/book-management-system",
      demo: "#",
      details: [
        "Developed a REST API following clean architecture principles, implementing CRUD operations for books and authors with Prisma ORM for type-safe database queries and advanced filtering on title, author, and publication metadata.",
        "Secured endpoints using native NestJS guards and role-based access control, following official NestJS security best practices, and added request validation with Zod alongside bcrypt password hashing for user authentication flows.",
        "Implemented a flexible tagging system for book categorization and authored comprehensive API documentation with Swagger integration for endpoint testing and consumption."
      ]
    }
  ]
};