import { ArrowUpRight, GitBranch } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 font-bold text-slate-950">
            G
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              Guillermo Rangel
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#proyectos" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>
          <a href="#sobre-mi" className="transition hover:text-white">
            Sobre mí
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Guillermo23rangel"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <GitBranch className="h-4 w-4" />
          </a>

          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 sm:inline-flex"
          >
            Hablemos
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
