export type Pillar = "dev" | "sec" | "ai";

export const pillarColor: Record<Pillar, string> = {
  dev: "#4C7CF0",
  sec: "#B084F5",
  ai: "#F2A65A",
};

export const founders = [
  {
    name: "Andrés Felipe Sarria Sabogal",
    role: "Desarrollador de Software",
    pillar: "dev" as Pillar,
    detail:
      "Diseña la arquitectura y construye el producto de punta a punta, cuidando que cada línea de código sostenga el crecimiento del cliente a largo plazo.",
  },
  {
    name: "Nicolás Chávez Oliveros",
    role: "Ingeniero de Ciberseguridad",
    pillar: "sec" as Pillar,
    detail:
      "Audita y blinda cada solución antes de salir a producción, para que la seguridad sea un cimiento del proyecto y no una corrección de último momento.",
  },
  {
    name: "Luis de Ávila Mosquera",
    role: "Ingeniero de Inteligencia Artificial",
    pillar: "ai" as Pillar,
    detail:
      "Integra IA donde realmente aporta valor al negocio del cliente, desde automatizaciones internas hasta modelos a la medida.",
  },
];

export const services = [
  {
    title: "Software a la medida",
    pillar: "dev" as Pillar,
    description:
      "Aplicaciones web y móviles diseñadas desde cero para tu operación, sin plantillas genéricas ni licencias que te limitan.",
  },
  {
    title: "Soluciones con IA",
    pillar: "ai" as Pillar,
    description:
      "Automatización de procesos, asistentes internos y modelos entrenados sobre tus propios datos, integrados de forma nativa en el producto.",
  },
  {
    title: "Ciberseguridad y auditoría",
    pillar: "sec" as Pillar,
    description:
      "Revisión de vulnerabilidades, hardening de infraestructura y buenas prácticas aplicadas desde el primer commit.",
  },
  {
    title: "Consultoría tecnológica",
    pillar: "dev" as Pillar,
    description:
      "Acompañamiento para decidir arquitectura, stack y hoja de ruta antes de invertir en desarrollo.",
  },
  {
    title: "Integraciones y APIs",
    pillar: "ai" as Pillar,
    description:
      "Conectamos tus sistemas actuales con pasarelas de pago, ERPs, CRMs y servicios de IA de terceros.",
  },
  {
    title: "Mantenimiento y soporte",
    pillar: "sec" as Pillar,
    description:
      "Monitoreo, actualizaciones y respuesta ante incidentes para que tu producto siga funcionando sin sorpresas.",
  },
];

export const demos = [
  {
    title: "Asistente de atención al cliente",
    pillar: "ai" as Pillar,
    status: "Demo disponible",
    description:
      "Chatbot con IA entrenado sobre una base de conocimiento propia, capaz de escalar a un humano cuando es necesario.",
  },
  {
    title: "Escáner de vulnerabilidades",
    pillar: "sec" as Pillar,
    status: "Demo disponible",
    description:
      "Panel que audita endpoints expuestos y genera un reporte priorizado por severidad en minutos.",
  },
  {
    title: "Dashboard operativo en tiempo real",
    pillar: "dev" as Pillar,
    status: "Próximamente",
    description:
      "Visualización de métricas de negocio conectada directamente a la base de datos del cliente.",
  },
];

export const projects = [
  {
    title: "Próximo caso de éxito",
    client: "Espacio reservado",
    description:
      "Aquí documentaremos el primer proyecto entregado: reto del cliente, solución construida y resultado medible.",
  },
  {
    title: "Próximo caso de éxito",
    client: "Espacio reservado",
    description:
      "Estructura lista para sumar portafolio a medida que cerramos los primeros proyectos de Triadix.",
  },
];
