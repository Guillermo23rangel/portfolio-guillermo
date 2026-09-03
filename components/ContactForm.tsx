import { GitBranch, Mail, Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
      <form
        action="https://formsubmit.co/memorangelugo@gmail.com"
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_subject" value="Nuevo contacto desde tu portafolio" />
        <input type="hidden" name="_captcha" value="true" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tuemail@dominio.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
            Asunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Necesito ayuda con mi proyecto web"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Cuéntame qué quieres construir..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Enviar mensaje
          <Send className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-8 border-t border-slate-800 pt-6">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-500">
          Redes y contacto
        </p>

        <div className="space-y-3">
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
            <GitBranch className="h-4 w-4 text-sky-400" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
