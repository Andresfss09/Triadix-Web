import { motion } from "framer-motion";

const services = [
  {
    title: "Ingeniería Custom",
    desc: "Sistemas Core, plataformas SaaS y aplicaciones web progresivas. Escalabilidad garantizada y código limpio.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Agentes de IA",
    desc: "Automatización inteligente. Implementamos RAG, chatbots avanzados y análisis predictivo en tus procesos.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Zero Trust",
    desc: "Arquitecturas inquebrantables. Pentesting, análisis de vulnerabilidades y encriptación de extremo a extremo.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tighter uppercase">Nuestros Servicios</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-ink/60 backdrop-blur-xl shadow-geist-border p-10 rounded-none"
            >
              <svg className="w-8 h-8 text-paper mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d={s.icon} />
              </svg>
              <h3 className="text-xl font-display font-semibold text-paper mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-paper/70 font-body text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

