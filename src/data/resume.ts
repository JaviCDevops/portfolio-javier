export const personalData = {
  name: "Javier Cuevas Pérez",
  title: "Ingeniero en Informática | Full Stack Developer",
  location: "Maipú, Chile",
  email: "javiercuevasperez2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/javier-cuevas-perez-895707248/",
  github: "https://github.com/JaviCDevops/JaviCDevops",
  about: "Estudiante de último año de Ingeniería en Informática. Especializado en el desarrollo de soluciones Full Stack escalables, migraciones de sistemas legacy y automatización de procesos con IA.",
};

export const skills = [
  "PHP 8.3 / Laravel 11", 
  "JavaScript / TypeScript",
  "React / Next.js 14",
  "Node.js / Express",
  "SQL (MySQL / PostgreSQL)",
  "NoSQL (MongoDB)",
  "Puppeteer / Web Scraping", 
  "Google Gemini AI API",    
  "Git / GitHub / Docker"
];

export const experience = [
  {
    company: "Punto Integra",
    role: "Liderazgo Técnico & Full Stack Dev",
    period: "11/2025 - Presente",
    description: "Liderazgo en la transformación digital, migración de tecnologías y desarrollo de sistemas críticos.",
    projects: [
      {
        name: "Sistema ERP",
        tech: ["Laravel 11", "PHP 8.3", "MySQL", "Blade", "cPanel"],
        details: "Reingeniería total de MERN a Laravel para optimizar rendimiento en servidor Linux. Incluye gestión avanzada de roles (RBAC), motor de cotizaciones PDF automático y control de flujo comercial.",
        slug: "erp-system",
        image: "/ruta-imagen.png"
      },
      {
        name: "Pagina web empresa",
        tech: ["Next.js 14", "Tailwind CSS", "React"],
        slug: "corporate-platform",
        details: "Solución de alto rendimiento para captación de leads. Desarrollo de componentes UI reutilizables, optimización SEO y conexión directa a API de WhatsApp Business.",
        image: "/ruta-imagen.png"
      }
    ]
  }
];