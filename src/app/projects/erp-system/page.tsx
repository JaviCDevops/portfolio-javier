import Link from 'next/link';
import { ArrowLeft, CheckCircle, Shield, Database, FileText } from 'lucide-react';

export default function ProjectERP() {
  return (
    <main className="min-h-screen font-sans pb-20">
      
      <header className="pt-24 pb-16 px-6 border-b border-slate-800 bg-slate-950/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition">
            <ArrowLeft size={20} className="mr-2" /> Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sistema ERP de Gestión Comercial
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Plataforma integral para la transformación digital de <span className="font-semibold text-white">Punto Integra</span>, automatizando el ciclo completo desde la cotización hasta el contrato.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <aside className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Rol</h3>
            <p className="font-medium text-slate-200">Líder Técnico & Full Stack Dev</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'PDFKit', 'REST API'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-950/50 text-blue-300 text-sm font-mono rounded border border-blue-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Tipo</h3>
            <p className="font-medium text-slate-200">SaaS Corporativo / Intranet</p>
          </div>
        </aside>

        <section className="md:col-span-2 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-red-900/50 text-red-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-red-900">1</span>
              El Desafío
            </h2>
            <p className="text-slate-300 leading-relaxed">
              La empresa gestionaba presupuestos millonarios y proyectos activos mediante hojas de cálculo desconectadas. Esto generaba errores en la conversión de datos y pérdida de trazabilidad financiera.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-blue-900/50 text-blue-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-blue-900">2</span>
              Arquitectura de la Solución
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Diseñé una arquitectura basada en el <strong>Stack MERN</strong> centrada en la escalabilidad modular.
            </p>
            
            <div className="grid gap-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <Shield size={18} className="text-emerald-400" />
                  Seguridad Granular (RBAC)
                </h4>
                <p className="text-sm text-slate-400">
                  Implementación de <strong>JWT</strong> con middleware personalizado. Los admins tienen control total, mientras que los operativos solo acceden a sus módulos, protegiendo la data sensible.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <FileText size={18} className="text-amber-400" />
                  Motor de Documentos
                </h4>
                <p className="text-sm text-slate-400">
                  Micro-servicio para generación de PDFs "al vuelo". Convierte datos de la BD en contratos legales listos para firma en segundos.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 backdrop-blur-md">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-slate-100">
                  <Database size={18} className="text-purple-400" />
                  Modelado de Datos
                </h4>
                <p className="text-sm text-slate-400">
                  Esquemas de Mongoose optimizados con relaciones referenciales para asegurar integridad transaccional entre Ventas y Finanzas.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <span className="w-8 h-8 bg-emerald-900/50 text-emerald-400 rounded-lg flex items-center justify-center mr-3 text-sm font-bold border border-emerald-900">3</span>
              Impacto Técnico
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Automatización 100%:</strong> Se eliminó la carga manual de datos al pasar de etapa de venta a operación.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300"><strong>Centralización:</strong> API RESTful única que sirve datos coherentes a todos los departamentos.</span>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main>
  );
}