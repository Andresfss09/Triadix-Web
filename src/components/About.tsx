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
              Impulsar el crecimiento de negocios de todos los tamaños , desde emprendimientos locales hasta grandes corporaciones, desarrollando soluciones tecnológicas a la medida que se adaptan exactamente a sus necesidades. Ya sea una página web corporativa, un sistema de gestión empresarial (ERP/CRM) o un Software como Servicio (SaaS), nuestra misión es entregar productos donde el desarrollo impecable, la ciberseguridad y la Inteligencia Artificial trabajan juntos para transformar y optimizar las operaciones de nuestros clientes.
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
              Convertirnos en el socio tecnológico estratégico de referencia para cualquier empresa que busque escalar al siguiente nivel. Visualizamos un ecosistema empresarial donde cualquier negocio, sin importar su tamaño, pueda acceder a desarrollo de software de élite; democratizando la tecnología para que todos puedan operar con la misma eficiencia, seguridad e innovación que los líderes globales del mercado.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

