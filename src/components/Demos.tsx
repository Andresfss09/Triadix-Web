import { motion } from "framer-motion";

const demos = [
  {
    title: "Próximo caso de éxito",
    desc: "Aquí documentaremos el primer proyecto entregado: reto del cliente, solución construida y resultado medible.",
  },
  {
    title: "Próximo caso de éxito",
    desc: "Estructura lista para sumar portafolio a medida que cerramos los primeros proyectos de Triadix.",
  }
];

export default function Demos() {
  return (
    <section id="demos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tighter uppercase mb-6">Portafolio</h2>
          <p className="text-paper/60 text-lg font-body max-w-2xl">Estamos comenzando: esta sección crecerá con cada proyecto que entreguemos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-ink/60 backdrop-blur-xl shadow-geist-border p-12 rounded-none flex flex-col justify-center min-h-[300px]"
            >
              <div className="text-[10px] font-mono tracking-[2px] text-paper/30 uppercase mb-8">Espacio reservado</div>
              <h3 className="text-2xl font-display font-semibold text-paper mb-4 tracking-tight">{d.title}</h3>
              <p className="text-paper/60 font-body leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

