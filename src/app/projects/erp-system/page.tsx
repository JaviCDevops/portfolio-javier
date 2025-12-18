import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Database, FileText, Server } from 'lucide-react';

export default function ProjectERP() {
  return (
    <main className="min-h-screen font-sans pb-20">
      
      {/* HEADER */}
      <header className="pt-24 pb-16 px-6 border-b border-slate-800 bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition">
            <ArrowLeft size={20} className="mr-2" /> Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            App Web ERP 
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Plataforma integral para la transformación digital de <span className="font-semibold text-white">Punto Integra</span>, migrada a una arquitectura robusta para automatizar el ciclo comercial completo.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* SIDEBAR - INFO TÉCNICA */}
        <aside className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Rol</h3>
            <p className="font-medium text-slate-200">Líder Técnico & Full Stack Dev</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {['Laravel 11', 'PHP 8.3', 'MySQL', 'Blade', 'JavaScript', 'DomPDF', 'cPanel'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-950/50 text-blue-300 text-sm font-mono rounded border border-blue-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Tipo</h3>
            <p className="font-medium text-slate-200">SaaS Corporativo / Monolito MVC</p>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <section className="md:col-span-2 space-y-12">
          
          {/* 1. EL DESAFÍO */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-red-900/50 text-red-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-red-900">1</span>
              El Desafío
            </h2>
            <p className="text-slate-300 leading-relaxed">
              La empresa gestionaba presupuestos millonarios mediante hojas de cálculo desconectadas. El prototipo inicial en MERN enfrentó problemas de compatibilidad con el servidor legacy del cliente. El reto fue migrar y optimizar el sistema para una infraestructura Linux estándar sin perder funcionalidad.
            </p>
          </div>

          {/* 2. LA SOLUCIÓN */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-blue-900/50 text-blue-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-blue-900">2</span>
              Arquitectura de la Solución
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Reconstruí la aplicación utilizando <strong>Laravel 11</strong>, aprovechando su arquitectura MVC para garantizar estabilidad, seguridad y un despliegue rápido.
            </p>
            
            <div className="grid gap-4">
              {/* Card Seguridad */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <Shield size={18} className="text-emerald-400" />
                  Seguridad y Roles (RBAC)
                </h4>
                <p className="text-sm text-slate-400">
                  Implementación de <strong>Gates & Policies</strong> nativos de Laravel. Sistema granular donde Operaciones, Ventas y Gerencia tienen accesos estrictamente segregados.
                </p>
              </div>

              {/* Card Documentos */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <FileText size={18} className="text-amber-400" />
                  Automatización Documental
                </h4>
                <p className="text-sm text-slate-400">
                  Integración de motor PDF en PHP. Transforma datos de cotizaciones en documentos legales formales listos para firma en menos de 2 segundos.
                </p>
              </div>

              {/* Card Base de Datos */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <Database size={18} className="text-purple-400" />
                  Base de Datos Relacional
                </h4>
                <p className="text-sm text-slate-400">
                  Migración de NoSQL a <strong>MySQL</strong> usando <strong>Eloquent ORM</strong>. Diseño de esquema relacional optimizado para integridad transaccional financiera.
                </p>
              </div>
            </div>
          </div>

          {/* 3. IMPACTO */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-emerald-900">3</span>
              Impacto Técnico
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Estabilidad:</strong> Despliegue exitoso en cPanel/Linux, reduciendo costos de infraestructura.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Eficiencia:</strong> La generación automática de contratos redujo el error humano en un 100%.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Centralización:</strong> Unificación de flujo comercial y operativo en una sola base de datos confiable.</span>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main>
  );
}