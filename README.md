# Portfalio Javier Cuevas Pérez

Portafolio personal de **Javier Cuevas Pérez**, Ingeniero en Informática y Full Stack Developer. Una experiencia web inmersiva construida con **Next.js**, **React Three Fiber** y **Tailwind CSS**, que presenta proyectos, habilidades técnicas y experiencia profesional en un entorno 3D interactivo.

## ✨ Características

- **Diseño 3D inmersivo**: fondo estrellado y escenas interactivas con React Three Fiber.
- **Galería de proyectos 3D**: tarjetas flotantes con logos reales de las empresas.
- **Visualización de habilidades**: orbes 3D clickeables que revelan tecnologías por categoría.
- **Totalmente responsive**: adaptado para escritorio, tablet y dispositivos móviles.
- **Navegación suave**: scroll animado entre secciones.
- **Tema azul lunar**: paleta de colores oscura con acentos cyan y violeta.

## 🛠 Stack tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://docs.pmnd.rs/drei)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/) + [Simple Icons](https://simpleicons.org/)

## 🚀 Cómo ejecutar localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JaviCDevops/portfolio-javier.git
   cd portfolio-javier
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build para producción

```bash
npm run build
```

El sitio estático se genera en la carpeta `dist/`.

Para servir la build localmente:

```bash
npx serve dist -l 3000
```

## 🗂 Estructura del proyecto

```
.
├── app/                  # Rutas y layout de Next.js
├── components/           # Componentes reutilizables (3D, navegación, tarjetas)
├── sections/             # Secciones principales de la página
├── hooks/                # Hooks personalizados
├── lib/                  # Datos e información personal
├── public/               # Assets estáticos (logos, favicon)
├── next.config.ts        # Configuración de Next.js
└── README.md             # Este archivo
```

## 🎨 Personalización

La información personal (nombre, bio, proyectos, habilidades, contacto) se encuentra centralizada en:

```bash
lib/data.ts
```

Edita ese archivo para actualizar tu perfil, experiencia laboral, educación, certificaciones y enlaces de contacto.

## 📄 Licencia

Este proyecto es de uso personal. Puedes inspirarte en la estructura, pero por favor no copies el contenido textual ni los datos personales.

---

Desarrollado con 💙 por [Javier Cuevas Pérez](https://github.com/JaviCDevops)
