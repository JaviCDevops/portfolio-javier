import Link from 'next/link';
import { ArrowLeft, Zap, Layout, MessageCircle, Code2 } from 'lucide-react';

export default function ProjectCorporate() {
  return (
    <main className="min-h-screen font-sans pb-20">
      
      <header className="pt-24 pb-16 px-6 border-b border-slate-800 bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition">
            <ArrowLeft size={20} className="mr-2" /> Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Plataforma Corporativa & UX
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Solución de alto rendimiento desarrollada con <span className="font-semibold text-white">Next.js 14</span>, enfocada en la conversión de leads y una experiencia móvil nativa.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <aside className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Rol</h3>
            <p className="font-medium text-slate-200">Desarrollo Frontend Avanzado</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js 14', 'Tailwind CSS', 'React', 'TypeScript', 'WhatsApp API'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-indigo-950/50 text-indigo-300 text-sm font-mono rounded border border-indigo-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Enfoque</h3>
            <p className="font-medium text-slate-200">Performance & UI Design</p>
          </div>
        </aside>

        <section className="md:col-span-2 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-indigo-900/50 text-indigo-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-indigo-900">1</span>
              Objetivo: Velocidad y Conversión
            </h2>
            <p className="text-slate-300 leading-relaxed">
              El desafío principal era crear una plataforma que convirtiera visitas en clientes. Las soluciones anteriores eran lentas y con mala UX móvil, lo que elevaba la tasa de rebote.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-blue-900/50 text-blue-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-blue-900">2</span>
              Ingeniería Frontend & Optimización
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Se utilizó <strong>Next.js 14</strong> para aprovechar el Server Side Rendering (SSR) y mejorar el SEO técnico.
            </p>
            
            <div className="grid gap-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <Layout size={18} className="text-pink-400" />
                  Componentes UI "Zero-Bloat"
                </h4>
                <p className="text-sm text-slate-400">
                  Diseñé <strong>componentes personalizados</strong> reutilizables (Sliders, Modales) con Tailwind CSS, eliminando librerías pesadas. Esto mejoró drásticamente el "First Contentful Paint".
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <MessageCircle size={18} className="text-green-400" />
                  Integración de Conversión
                </h4>
                <p className="text-sm text-slate-400">
                  Conexión directa con la <strong>API de WhatsApp</strong> y formularios inteligentes para canalizar leads al equipo de ventas sin fricción.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-emerald-900">3</span>
              Resultado
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Zap className="text-amber-400 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Optimización Móvil:</strong> Experiencia fluida y responsiva.</span>
              </li>
              <li className="flex items-start gap-3">
                <Code2 className="text-blue-400 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Arquitectura Limpia:</strong> Código mantenible basado en React Server Components.</span>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main>
  );
}