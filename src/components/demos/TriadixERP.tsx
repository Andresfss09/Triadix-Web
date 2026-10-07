import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, ShieldAlert, BarChart3, Terminal, Server, Activity } from "lucide-react";

export default function TriadixERP() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Inicializando módulo de defensa activa...",
    "[AI] Modelo predictivo cargado. Estado: ÓPTIMO."
  ]);

  useEffect(() => {
    if (activeTab === "security") {
      const interval = setInterval(() => {
        const fakeLogs = [
          "[SEC] Petición anómala detectada en IP 192.168.1.104 -> BLOQUEADA",
          "[AI] Analizando patrones de tráfico... Ninguna amenaza latente.",
          "[SYS] Sincronizando base de datos distribuida...",
          "[SEC] Certificados Zero Trust verificados con éxito."
        ];
        setLogs(prev => [...prev, fakeLogs[Math.floor(Math.random() * fakeLogs.length)]].slice(-6));
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "clients", label: "Clientes", icon: Users },
    { id: "security", label: "Ciberseguridad", icon: ShieldAlert },
    { id: "analytics", label: "Métricas", icon: BarChart3 },
  ];

  return (
    <div className="w-full bg-[#050505] shadow-geist-border rounded-none flex flex-col md:flex-row min-h-[600px] font-body overflow-hidden relative">
      
      {/* SIDEBAR */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a] p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-6 bg-white flex items-center justify-center">
            <div className="w-3 h-3 bg-black" />
          </div>
          <span className="font-display font-semibold tracking-tighter text-lg uppercase text-white">Triadix OS</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? "bg-white text-black" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-2 text-[10px] text-green-400 font-mono tracking-widest uppercase">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Sistema en línea
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-6 md:p-10 bg-[#000000] overflow-y-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-display font-semibold uppercase tracking-tight text-white">Visión General</h3>
              
              {/* METRICS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Ingresos (Mensual)", value: "$124,500", icon: Activity },
                  { label: "Usuarios Activos", value: "8,241", icon: Users },
                  { label: "Amenazas Bloqueadas", value: "1,042", icon: ShieldAlert },
                ].map((metric, i) => (
                  <div key={i} className="p-6 border border-white/10 bg-white/5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase">{metric.label}</div>
                      <metric.icon className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="text-3xl font-display font-semibold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CHART SIMULATION */}
                <div className="p-6 border border-white/10 bg-white/5 flex flex-col justify-end h-64">
                  <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase mb-auto">Rendimiento de Servidores</div>
                  <div className="flex items-end gap-2 h-32 w-full mt-4">
                    {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-white hover:bg-white/80 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                {/* AI PANEL */}
                <div className="p-6 border border-white/10 bg-black font-mono text-xs overflow-hidden flex flex-col">
                  <div className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest border-b border-white/10 pb-4">
                    <Terminal className="w-4 h-4" />
                    Registro de Inteligencia Artificial
                  </div>
                  <div className="space-y-2 text-green-400">
                    <p>&gt; Analizando comportamiento de usuarios...</p>
                    <p className="text-white/70">&gt; Optimizando consultas de base de datos SQL...</p>
                    <p>&gt; <span className="text-blue-400">Info:</span> Latencia reducida en 24ms.</p>
                    <p className="animate-pulse">_</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div>
              <h3 className="text-2xl font-display font-semibold uppercase tracking-tight text-white mb-8">Directorio de Clientes</h3>
              <div className="border border-white/10 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] uppercase font-mono tracking-widest text-white/50 bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="p-4 font-normal">Empresa</th>
                      <th className="p-4 font-normal">Estado</th>
                      <th className="p-4 font-normal">Módulos</th>
                      <th className="p-4 font-normal">Última Act.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Nova Corp", status: "Activo", modules: "ERP, CRM", date: "Hace 2 min" },
                      { name: "Global Logistics", status: "Mantenimiento", modules: "SaaS", date: "Hace 1 hora" },
                      { name: "FinTech Prime", status: "Activo", modules: "ERP, AI Security", date: "Hace 5 horas" },
                    ].map((client, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors text-white/80">
                        <td className="p-4 font-medium text-white">{client.name}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 text-[10px] font-mono tracking-widest uppercase ${client.status === 'Activo' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="p-4 text-white/60">{client.modules}</td>
                        <td className="p-4 text-white/60">{client.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-display font-semibold uppercase tracking-tight text-white mb-8 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-red-500" />
                Centro de Ciberseguridad Zero Trust
              </h3>
              <div className="flex-1 bg-black border border-white/10 p-6 font-mono text-sm flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse" />
                <div className="text-red-500 mb-6 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span>MONITOREO EN TIEMPO REAL - KERNEL PROTEGIDO</span>
                </div>
                <div className="space-y-3">
                  {logs.map((log, i) => (
                    <div key={i} className={`${log.includes('BLOQUEADA') ? 'text-red-400 font-bold' : log.includes('[AI]') ? 'text-blue-400' : 'text-white/60'}`}>
                      {log}
                    </div>
                  ))}
                  <div className="text-white/30 animate-pulse">|</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="flex items-center justify-center h-64 text-white/50 font-mono text-sm tracking-widest uppercase">
              Módulo de análisis de datos en construcción
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
