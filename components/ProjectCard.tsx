import { ArrowUpRight, GitBranch } from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    summary: string;
    problem: string;
    solution: string;
    stack: string[];
    demo: string;
    repo: string;
    accent: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80">
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${project.accent}`} />

      <div className="relative p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
            Proyecto destacado
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-300">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Activo
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-4 text-sm text-slate-300">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-500">
              Problema
            </p>
            <p className="leading-6">{project.problem}</p>
          </div>

          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-500">
              Solución
            </p>
            <p className="leading-6">{project.solution}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={project.repo}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
