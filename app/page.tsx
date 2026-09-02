import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Mail,
  MapPin,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "Sistema de apoyo para detección temprana de dificultades de aprendizaje",
    summary:
      "Aplicación web desarrollada como proyecto de tesis para apoyar la identificación temprana de posibles dificultades de aprendizaje en estudiantes del Liceo Nueva Esparta.",
    problem:
      "El proceso de detección estaba basado en observación manual y evaluación parcial, lo que dificultaba identificar patrones de aprendizaje y derivar a los estudiantes a la atención oportuna de profesionales especializados.",
    solution:
      "Diseñé una plataforma que combina evaluación guiada, análisis de indicadores clave y una lógica de referencia profesional para apoyar la toma de decisiones en el proceso de preinscripción escolar y acompañamiento pedagógico.",
    stack: ["HTML", "CSS", "JavaScript", "JSON", "Python"],
    demo: "#",
    repo: "#",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    title: "Aplicación de marcas de agua para contenido visual",
    summary:
      "Proyecto personal orientado a proteger imágenes y documentos visuales mediante una solución simple, rápida y útil para usuarios que necesitan controlar la propiedad de su contenido digital.",
    problem:
      "El mercado necesitaba una forma accesible y automatizada de proteger archivos visuales sin depender de procesos manuales complejos o herramientas poco intuitivas.",
    solution:
      "Desarrollé una aplicación enfocada en la marca de agua digital con una experiencia clara para la carga de archivos, personalización del texto y aplicación de protección visual en un flujo eficiente.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Tailwind", "Procesamiento de imagen"],
    demo: "#",
    repo: "#",
    accent: "from-violet-500/20 via-indigo-500/10 to-transparent",
  },
];

const techGroups = [
  {
    title: "Frontend (Especialidad)",
    description: "Interfaces modernas, rápidas y accesibles.",
    icon: Code2,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & APIs (Bases)",
    description: "Lógica esencial y consumo de servicios.",
    icon: ServerCog,
    items: ["Node.js (Basico)", "Consumo de REST APIs", "Integración de Formularios", "Manejo de Estados", "JSON Data"],
  },
  {
    title: "Herramientas & IA",
    description: "Flujo de desarrollo ágil y asistido.",
    icon: Database,
    items: ["GitHub Copilot", "VS Code", "Git / GitHub", "Prompts para Desarrollo", "Automatización de Código"],
  },
  {
    title: "Despliegue & Entorno",
    description: "Publicación y hosting de aplicaciones.",
    icon: Cloud,
    items: ["Vercel", "Git Flow Básico", "NPM / Packages", "Windows / Terminal CMD", "Deploy Continuo"],
  },
];

const experience = [
  {
    period: "2023 — Actualidad",
    title: "Ingeniero de Sistemas / Desarrollador Junior",
    description:
      "Diseño y desarrollo de soluciones web para clientes, automatización de procesos y mejora de experiencias digitales con enfoque en rendimiento y escalabilidad.",
  },
  {
    period: "2021 — 2023",
    title: "Desarrollador Frontend con bases de Backend",
    description:
      "Construyo aplicaciones web y paneles de control que simplifican procesos. Mi fuerte es el Frontend, con el criterio técnico necesario para entender y conectar la lógica del Backend",
  },
  
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_36%)]" />

      <Navbar />

      <section
        id="inicio"
        className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-20 pt-20 sm:px-8 lg:px-12"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              Ingeniero de Sistemas
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                Guillermo Rangel
                <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  Ingeniero en Sistemas
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Desarrollo soluciones digitales con enfoque en usabilidad, impacto real y
                valor para personas, instituciones y negocios que buscan transformar procesos
                con tecnología inteligente.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Contactar
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-400" />
                Disponible para proyectos
              </span>
              <span className="inline-flex items-center gap-2">
                <Rocket className="h-4 w-4 text-violet-400" />
                Enfoque en productos digitales
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/50">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Perfil
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Frontend Developer
                  </h2>
                </div>
                <div className="rounded-full border border-sky-500/30 bg-sky-500/10 p-2 text-sky-400">
                  <Workflow className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Frontend Developer (en constante evolución hacia Full-Stack)",
                  "Desarrollo de interfaces con enfoque en experiencia de usuario",
                  "Integración de APIs, servicios y datos",
                  "Fundamentos de Backend y lógica de negocio",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Proyectos", value: "2+" },
                  { label: "Stack", value: "8+" },
                  { label: "Impacto", value: "100%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-center"
                  >
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Proyectos"
          title="Soluciones construidas con criterio técnico y enfoque comercial"
          description="Cada proyecto refleja una necesidad real, una decisión de arquitectura y un resultado medible para el negocio."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologías con las que construyo productos sólidos"
          description="Combino herramientas modernas para crear experiencias rápidas, mantenibles y listas para producción."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {techGroups.map(({ title, description, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-slate-700 hover:bg-slate-900"
            >
              <div className="mb-5 inline-flex rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>

              <ul className="mt-5 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Experiencia"
          title="Trayectoria enfocada en resolución de problemas y entrega de valor"
          description="Trabajo con una mentalidad orientada a producto: entendimiento del negocio, diseño de solución, implementación y mejora continua."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky-500/70 via-slate-700 to-transparent" />

          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.period} className="relative pl-14">
                <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 text-sky-300">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos de tu proyecto"
              description="Estoy disponible para colaborar en proyectos web, productos digitales y soluciones a medida."
            />

            <div className="mt-8 space-y-4">
              <a
                href="mailto:memorangelugo@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-slate-200 transition hover:border-slate-600"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                memorangelugo@gmail.com
              </a>

              <a
                href="https://github.com/Guillermo23rangel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-slate-200 transition hover:border-slate-600"
              >
                <ArrowUpRight className="h-4 w-4 text-sky-400" />
                GitHub
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="font-medium text-slate-200">Guillermo Rangel</div>

          <div className="flex items-center gap-5">
            <a href="#inicio" className="transition hover:text-slate-200">
              Inicio
            </a>
            <a href="#proyectos" className="transition hover:text-slate-200">
              Proyectos
            </a>
            <a href="#stack" className="transition hover:text-slate-200">
              Stack
            </a>
            <a href="#contacto" className="transition hover:text-slate-200">
              Contacto
            </a>
          </div>

          <div>© 2026 Guillermo Rangel. Todos los derechos reservados.</div>
        </div>
      </footer>
    </main>
  );
}
