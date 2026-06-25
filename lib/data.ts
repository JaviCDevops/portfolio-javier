export const personalInfo = {
  name: "Javier Cuevas Pérez",
  title: "Ingeniero en Informática",
  subtitle: "Full Stack Developer",
  email: "javiercuevasperez2003@gmail.com",
  phone: "+56 9 4674 7078",
  location: "Maipú, Chile",
  github: "https://github.com/JaviCDevops",
  linkedin: "https://www.linkedin.com/in/javier-cuevas-perez-895707248/",
  bio: "Ingeniero en Informática con sólida experiencia Full Stack, especializado en Java Spring Boot y ecosistemas Cloud (Azure). Experto en arquitecturas de microservicios, seguridad (BFF / Anti-tampering) y despliegue automatizado con Docker y Kubernetes. Historial probado en desarrollo de soluciones escalables, integrando también experiencia previa en stacks PHP/Laravel y MERN.",
};

export const projects = [
  {
    id: "step-therapy",
    name: "Step Therapy",
    role: "Desarrollador Full-Stack Azure",
    period: "Ene 2026 – Actualidad",
    location: "Ñuñoa, Chile",
    description:
      "Diseño y desarrollo de soluciones escalables basadas en microservicios con Java Spring Boot, integrando seguridad BFF con firmas criptográficas y despliegue automatizado en Azure con Kubernetes.",
    highlights: [
      "Arquitectura de microservicios con Java Spring Boot y JPA.",
      "Patrón BFF con firma criptográfica anti-tampering entre React y la API.",
      "Despliegue de contenedores Docker en Kubernetes sobre Azure.",
      "Pipelines CI/CD para entregas automatizadas.",
      "Interfaces reactivas con React integradas de forma segura.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "React",
      "Azure",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "BFF",
    ],
    color: "#22d3ee",
    shape: "torus",
    logo: "/step-therapy-logo.png",
  },
  {
    id: "punto-integra",
    name: "Punto Integra",
    role: "Desarrollador Full-Stack Laravel React",
    period: "Nov 2025 – Ene 2026",
    location: "Maipú, Chile",
    description:
      "Liderazgo en la implementación y puesta en producción de un sistema ERP comercial con Laravel/PHP, junto con el desarrollo de la web pública en Next.js para captación de leads.",
    highlights: [
      "Sistema ERP comercial desarrollado con Laravel/PHP.",
      "Despliegue en entorno Linux/cPanel con configuración de seguridad.",
      "Diseño y administración de base de datos MySQL con migraciones críticas.",
      "Web pública de la empresa en Next.js con componentes UI reutilizables.",
      "Integración de APIs de contacto para captación de leads.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Next.js",
      "MySQL",
      "Linux",
      "cPanel",
      "Apache",
    ],
    color: "#a78bfa",
    shape: "box",
    logo: "/punto-integra-logo.jpg",
  }
];

export const skillCategories = [
  {
    name: "Backend & Integraciones",
    icon: "Server",
    color: "#22d3ee",
    skills: [
      "Java",
      "Spring Boot",
      "JPA/Hibernate",
      "Node.js",
      "Laravel",
      "PHP",
      "RESTful APIs",
      "BFF",
      "MVC",
    ],
  },
  {
    name: "Frontend & UI",
    icon: "Layout",
    color: "#a78bfa",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind"],
  },
  {
    name: "Cloud & DevOps",
    icon: "Cloud",
    color: "#34d399",
    skills: ["Microsoft Azure", "Kubernetes", "AKS", "Docker", "CI/CD", "Azure Pipelines", "Git", "GitHub"],
  },
  {
    name: "Bases de Datos",
    icon: "Database",
    color: "#fbbf24",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Diseño relacional"],
  },
  {
    name: "Calidad & Agilidad",
    icon: "CheckCircle",
    color: "#f472b6",
    skills: ["Scrum", "JMeter", "Selenium", "Code Reviews", "Pruebas unitarias"],
  },
];

export const experience = [
  {
    title: "Desarrollador Full-Stack Azure",
    company: "Step Therapy",
    period: "Ene 2026 – Actualidad",
    location: "Ñuñoa, Chile",
    logo: "/step-therapy-logo.png",
    summary:
      "Microservicios con Java Spring Boot, seguridad BFF con firmas criptográficas y despliegue en Azure con Kubernetes y CI/CD.",
  },
  {
    title: "Desarrollador Full-Stack Laravel React",
    company: "Punto Integra",
    period: "Nov 2025 – Ene 2026",
    location: "Maipú, Chile",
    logo: "/punto-integra-logo.jpg",
    summary:
      "Implementación y despliegue de ERP comercial con Laravel/PHP, administración MySQL y desarrollo de web pública en Next.js.",
  },
];

export const education = [
  {
    title: "Ingeniería en Informática",
    institution: "Instituto Profesional Duoc UC",
    detail: "Especialidad en Ingeniería de Software",
    period: "Mar 2022 – Dic 2025",
    location: "Maipú, Chile",
  },
];

export const certifications = [
  {
    name: "Scrum Foundation Professional Certification (SFPC)",
    issuer: "CertiProf",
  },
];
