export const personalData = {
  name: "Javier Cuevas Pérez",
  title: "Ingeniero en Informática | Full Stack Developer",
  location: "Maipú, Chile",
  email: "javiercuevasperez2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/javier-cuevas-perez-895707248/",
  github: "https://github.com/JaviCDevops/JaviCDevops",
  about: "Estudiante de último año de Ingeniería en Informática con sólida experiencia en DEVOPS. Especializado en Backend y Frontend.", // [cite: 8, 9]
};

export const skills = [
  "JavaScript/TypeScript", "React", "Next.js 14", "Node.js", 
  "Java", "PHP/Laravel", "SQL (PostgreSQL/MySQL)", 
  "NoSQL (MongoDB)", "Git/GitHub", "Scrum", "Docker"
];

export const experience = [
  {
    company: "Punto Integra",
    role: "Liderazgo Técnico & Full Stack Dev",
    period: "11/2025 - Presente",
    description: "Liderazgo en la transformación digital y desarrollo de sistemas críticos.",
    projects: [
      {
        name: "Sistema ERP de Gestión",
        tech: ["MERN Stack", "JWT", "REST API"],
        details: "Digitalización de procesos manuales y arquitectura de seguridad granular (RBAC). Integración de motores PDF para contratos automáticos.",
        slug: "erp-system",
        image: "/ruta-imagen.png"
      },
      {
        name: "Plataforma Corporativa",
        tech: ["Next.js 14", "Tailwind CSS"],
        slug: "corporate-platform",
        details: "Solución de alto rendimiento para captación de leads con componentes UI reutilizables y conexión a API de WhatsApp.",
        image: "/ruta-imagen.png"
      }
    ]
  },
];