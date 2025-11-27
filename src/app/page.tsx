import { personalData, skills, experience } from '@/data/resume';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'; 
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      
      <header className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
          {personalData.name}
        </h1>
        <h2 className="text-2xl text-blue-400 font-medium mb-6">
          {personalData.title}
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"> 
          {personalData.about}
        </p>
        
        <div className="flex gap-4 items-center flex-wrap">
          <a href={personalData.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 border border-slate-700 transition">
            <Github size={20} /> GitHub
          </a>
          <a href={personalData.linkedin} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href={`mailto:${personalData.email}`} className="flex items-center gap-2 px-4 py-2 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800/50 transition">
            <Mail size={20} /> Contacto
          </a>
          <a href="/Javier-Cuevas-Pérez-CV.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 text-slate-300 font-medium hover:text-blue-400 transition">
             <Download size={20} /> Descargar CV
          </a>
        </div>
      </header>

      <section className="py-16 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            Habilidades Técnicas
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-sm font-medium border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-6">
        <h3 className="text-2xl font-bold mb-10 text-white">Experiencia Destacada</h3>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-sm" />
              
              <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-xl font-bold text-white">{job.role}</h4>
                <span className="text-sm font-mono text-slate-400">{job.period}</span>
              </div>
              <p className="text-lg text-slate-300 font-medium mb-4">{job.company}</p>
              
              <div className="space-y-6 mt-4">
                {job.projects.map((project: any, pIndex: number) => (
                  <div key={pIndex} className="bg-slate-900/60 backdrop-blur-md p-5 rounded-xl shadow-sm border border-slate-800 hover:border-blue-500/50 transition group">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-slate-100 text-lg">
                        {project.slug ? (
                            <Link href={`/projects/${project.slug}`} className="hover:text-blue-400 transition flex items-center gap-1">
                                {project.name} 
                                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                            </Link>
                        ) : (
                            project.name
                        )}
                      </h5>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t: string) => (
                        <span key={t} className="text-xs font-mono bg-blue-950 text-blue-300 border border-blue-900 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>Diseñado y desarrollado por Javier Cuevas Pérez.</p>
      </footer>
    </main>
  );
}