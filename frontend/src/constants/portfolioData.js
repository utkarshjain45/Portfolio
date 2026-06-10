import Threadly from "../assets/Threadly.png";
import AICrop from "../assets/AICrop.png";
import Quizora from "../assets/Quizora.png";
import PortfolioImg from "../assets/portfolio.png";

export const BIO = {
  name: "Utkarsh Jain",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable backend microservices and responsive web applications.",
  email: "jainutkarsh096@gmail.com",
  phone: "+91 9690662009",
  location: "Ghaziabad, Uttar Pradesh, India",
  aboutText: "I am a Computer Science and Engineering student at ABES Engineering College with a strong passion for Full-Stack development and backend system design. I specialize in building highly scalable, containerized microservices architectures, integrating machine learning modules, and designing responsive frontends. In addition, I am an active competitive programmer who enjoys solving algorithmic challenges and architecting efficient systems.",
  cvLink: "mailto:jainutkarsh096@gmail.com?subject=Request%20for%20Resume"
};

export const EDUCATION = [
  {
    institution: "ABES Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Ghaziabad, Uttar Pradesh",
    status: "Currently Pursuing - 77%",
    year: "Ongoing"
  },
  {
    institution: "SBRL Vaish Residential Educational Public Academy",
    degree: "Central Board of Secondary Education (Class XII)",
    location: "Mainpuri, Uttar Pradesh",
    status: "Completed",
    year: "2023"
  },
  {
    institution: "SSD Educational Academy",
    degree: "Central Board of Secondary Education (Class X)",
    location: "Ghiror, Uttar Pradesh",
    status: "Completed",
    year: "2021"
  }
];

export const PROJECTS = [
  {
    id: "ecommerce-microservices",
    Title: "Scalable E-Commerce Microservices Platform",
    Description: "A highly resilient, distributed e-commerce platform built using microservices architecture. It features separate microservices for products, orders, cart management, inventory, and payment processing, all securely integrated under a unified gateway API.",
    Img: Threadly,
    Link: "https://github.com/utkarshjain45",
    Github: "https://github.com/utkarshjain45",
    TechStack: ["Spring Boot", "React", "PostgreSQL", "Docker", "Eureka", "OpenFeign", "JWT"],
    Features: [
      "Microservices architecture separating Product, Order, Cart, Inventory, and Payment systems.",
      "Service discovery and registry using Netflix Eureka for dynamic load-balancing.",
      "Seamless inter-service HTTP client communication using OpenFeign.",
      "Secure endpoints protected by JWT authentication and API gateway routing.",
      "Containerized service deployments using Docker and optimized database indexing in PostgreSQL."
    ]
  },
  {
    id: "crop-recommendation",
    Title: "AI-Based Crop Recommendation System",
    Description: "An intelligent, ML-powered agricultural web application designed to recommend suitable crops to farmers based on soil composition (NPK levels) and weather parameters (temperature, humidity, rainfall, pH).",
    Img: AICrop,
    Link: "https://github.com/utkarshjain45",
    Github: "https://github.com/utkarshjain45/Ai-crop-recommendation",
    TechStack: ["Python", "Scikit-learn", "Pandas", "Spring Boot", "React"],
    Features: [
      "Machine learning predictive model built using Scikit-learn to classify and recommend crops.",
      "Feature engineering and robust data preprocessing using Pandas on soil parameters dataset.",
      "Integrated prediction engine served through Java/Spring Boot REST APIs.",
      "Rich analytics dashboard built using React, showing climate graphs and recommended crop profiles."
    ]
  },
  {
    id: "quiz-platform",
    Title: "Full-Stack Quiz Platform",
    Description: "A full-featured educational quiz platform supporting dynamic quiz creation, timed examinations, and automatic instant score evaluation with detailed breakdown reports.",
    Img: Quizora,
    Link: "https://quizora-frontend-one.vercel.app/",
    Github: "https://github.com/utkarshjain45/quizora-frontend",
    TechStack: ["React", "Spring Boot", "PostgreSQL", "JWT", "Docker", "Vercel", "Render"],
    Features: [
      "Dynamic test builder enabling teachers/admins to create quizzes with custom timers.",
      "Secure user/admin roles using JWT token authentication.",
      "Fully interactive student testing screen with active timer and auto-submission.",
      "Vercel hosting for frontend and Render cloud deployment for Dockerized Spring Boot backend (utilizing Neon serverless PostgreSQL)."
    ]
  },
  {
    id: "portfolio-website",
    Title: "Interactive Developer Portfolio",
    Description: "A modern, responsive portfolio website showcasing professional experience, software projects, certifications, and developer achievements. Features a dynamic comment section and contact portal powered by a local Spring Boot service and Cloudinary.",
    Img: PortfolioImg,
    Link: "https://portfolio-frontend-theta-lac.vercel.app/",
    Github: "https://github.com/utkarshjain45/Portfolio",
    TechStack: ["React", "Spring Boot", "PostgreSQL", "Cloudinary", "Tailwind CSS", "AOS", "SweetAlert2"],
    Features: [
      "Interactive layout featuring modern UI components and smooth scrolling animations via AOS.",
      "Dynamic, database-backed comment section enabling users to post comments with custom profile photos uploaded via Cloudinary.",
      "Secure contact portal routing user messages directly to a local Spring Boot service and PostgreSQL database.",
      "Environment-driven backend-endpoint switching, making the application fully production-ready."
    ]
  }
];

export const CERTIFICATES = [
  {
    Title: "AWS Academy Graduate - Cloud Foundations",
    Issuer: "Amazon Web Services (AWS)",
    Img: "/Certificates/AWS 1.jpg",
    Description: "Acquired fundamental knowledge of cloud architecture, detailing EC2 compute instances, S3 storage buckets, IAM security policies, VPC networking, AWS Lambda serverless execution, and RDS databases."
  },
  {
    Title: "AWS Academy Graduate - Cloud Foundations (Completion)",
    Issuer: "Amazon Web Services (AWS)",
    Img: "/Certificates/AWS 2.jpg",
    Description: "Completed core modules of the AWS Academy Cloud Foundations program, validation of foundational cloud computing expertise."
  },
  {
    Title: "Cognizant Internship Program Certificate",
    Issuer: "Cognizant",
    Img: "/Certificates/Cognizant.jpg",
    Description: "Completed standard training curriculum and practical development assignments validated under the Cognizant mentoring program."
  },
  {
    Title: "Deloitte Consulting Virtual Experience",
    Issuer: "Deloitte",
    Img: "/Certificates/Delloite.jpg",
    Description: "Completed simulated technology consulting experience, researching and resolving complex technology strategy challenges for business clients."
  },
  {
    Title: "Tata Consultancy Services Job Simulation",
    Issuer: "Tata Consultancy Services (TCS)",
    Img: "/Certificates/TATA Certificate.jpg",
    Description: "Participated in TCS industry-simulated project tasks, covering software engineering workflows and corporate development frameworks."
  },
  {
    Title: "Innotech 2025 Certificate",
    Issuer: "KIET Group of Institutions",
    Img: "/Certificates/Innotech25_Certificate_Utkarsh_Jain.png",
    Description: "Recognized for project presentation / participation showcasing software engineering innovations at Innotech 2025."
  }
];

export const LEETCODE = {
  rating: 1743,
  solved: "450+",
  contests: 51,
  leetcodeUrl: "https://leetcode.com/u/utkarshjain45",
  achievements: [
    "Solved 450+ complex Data Structures and Algorithms problems on LeetCode.",
    "Participated in 51 weekly and biweekly contests, securing a peak rating of 1743.",
    "Broad problem-solving coverage including Arrays, Dynamic Programming, Graphs, Recursion, and Binary Search.",
    "Shortlisted for the internal college-level round of Smart India Hackathon (SIH)."
  ]
};
