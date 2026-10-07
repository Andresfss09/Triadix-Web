import { motion } from "framer-motion";
import TriadixERP from "./demos/TriadixERP";

export default function Demos() {
  return (
    <section id="demos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tighter uppercase mb-6">Demo Tecnológico</h2>
          <p className="text-paper/60 text-lg font-body max-w-2xl">
            Interactúa con nuestro entorno simulado. Esta es la arquitectura visual, velocidad y robustez técnica que implementamos al construir plataformas SaaS, ERPs y paneles de control empresariales.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          {/* Subtle glow behind the ERP */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-50" />
          
          <div className="relative">
            <TriadixERP />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
