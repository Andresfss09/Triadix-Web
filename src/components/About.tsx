import { motion } from "framer-motion";
import { Terminal, ShieldCheck, BrainCircuit, Target, Eye } from "lucide-react";

const founders = [
  {
    name: "Andrés Felipe Sarria",
    role: "Arquitectura & Desarrollo",
    description: "Ingeniero de Sistemas encargado de orquestar la arquitectura y el desarrollo core. Transforma problemas complejos en ecosistemas de software limpios, modulares y altamente escalables, garantizando rendimiento y solidez técnica.",
    Icon: Terminal
  },
  {
    name: "Nicolás Chávez",
    role: "Ciberseguridad",
    description: "Diseña ecosistemas Zero Trust. Cada línea de código es auditada bajo los estándares globales más exigentes, garantizando protección de datos desde la concepción del producto.",
    Icon: ShieldCheck
  },
  {
    name: "Luis de Ávila",
    role: "Inteligencia Artificial",
    description: "Orquesta la inteligencia. Integra LLMs, modelos predictivos y algoritmos de Machine Learning de manera nativa, convirtiendo los datos en el mayor activo de la plataforma.",
    Icon: BrainCircuit
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tighter uppercase">La Tríada Fundadora</h2>
          <p className="text-paper/60 text-lg max-w-2xl mt-4 font-body">Nuestra dirección está compuesta por tres mentes brillantes trabajando en sincronía para ofrecer soluciones perfectas, donde el desarrollo, la seguridad y la IA son pilares inquebrantables.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-ink/60 backdrop-blur-xl shadow-geist-border p-10 rounded-none flex flex-col"
            >
              <founder.Icon className="w-10 h-10 text-paper mb-8" strokeWidth={1} />
              <h3 className="text-2xl font-display font-semibold text-paper mb-2 uppercase tracking-tight">{founder.name}</h3>
              <div className="text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-6">{founder.role}</div>
              <p className="text-paper/70 leading-relaxed font-body text-sm">{founder.description}</p>
            </motion.div>
          ))}
        </div>

        {/* MISIÓN Y VISIÓN */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-ink/60 backdrop-blur-xl shadow-geist-border p-12 rounded-none flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Target className="w-8 h-8 text-paper mb-8" strokeWidth={1} />
            <h3 className="text-3xl font-display font-semibold text-paper mb-6 uppercase tracking-tighter">Nuestra Misión</h3>
            <p className="text-paper/70 leading-relaxed font-body text-base">
              Diseñar y construir ecosistemas digitales inexpugnables, donde el desarrollo de software limpio, la ciberseguridad de grado militar y la inteligencia artificial convergen orgánicamente desde la primera línea de código. No ensamblamos piezas; forjamos arquitecturas monolíticas de alto rendimiento para impulsar la evolución técnica de nuestros clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-ink/60 backdrop-blur-xl shadow-geist-border p-12 rounded-none flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Eye className="w-8 h-8 text-paper mb-8" strokeWidth={1} />
            <h3 className="text-3xl font-display font-semibold text-paper mb-6 uppercase tracking-tighter">Nuestra Visión</h3>
            <p className="text-paper/70 leading-relaxed font-body text-base">
              Erradicar la obsolescencia y la fragilidad del software moderno. Visualizamos un futuro donde ninguna plataforma dependa de parches de seguridad externos o integraciones de IA sobrepuestas, sino que nazcan con resiliencia absoluta y cognición nativa en su ADN estructural, estableciendo un nuevo estándar de élite en la industria global.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
