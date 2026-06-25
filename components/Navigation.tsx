"use client";

import { useState } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { Code2, Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", target: "hero" },
  { label: "Experiencia", target: "experience" },
  { label: "Proyectos", target: "gallery" },
  { label: "Habilidades", target: "skills" },
  { label: "Contacto", target: "contact" },
];

export function Navigation() {
  const scrollTo = useScrollTo();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (target: string) => {
    scrollTo(target);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <Code2 className="h-5 w-5 text-accent" />
          <span>JCP</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.target}>
              <button
                onClick={() => handleNav(item.target)}
                className="rounded-md px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => handleNav("contact")}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 md:block"
          >
            Contáctame
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground hover:bg-surface-elevated md:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/[0.08] bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => handleNav(item.target)}
                  className="w-full rounded-md px-4 py-3 text-left text-base font-medium text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => handleNav("contact")}
                className="w-full rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-background"
              >
                Contáctame
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
