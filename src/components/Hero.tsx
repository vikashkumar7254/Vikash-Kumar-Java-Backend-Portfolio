import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "React & Modern Frontend",
  "Secure Spring Boot APIs",
  "Full Stack Architecture",
  "Database Optimization"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-6 tracking-wider uppercase"
          >
            Available for Remote & Freelance Projects
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-slate-950 dark:text-white">
            Java Full Stack Developer Specializing in{" "}
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto]"
            >
              Modern Web Applications
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build production-ready full stack applications using Spring Boot, React, and secure cloud-native architectures.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10"
          >
            {highlights.map((item, idx) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (idx * 0.1) }}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center group">
              Hire Me 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-all"
        >
          {[
            { name: "REACT", color: "bg-blue-400" },
            { name: "SPRING BOOT", color: "bg-green-500" },
            { name: "POSTGRESQL", color: "bg-blue-600" },
            { name: "AWS", color: "bg-orange-400" }
          ].map((tech, idx) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + (idx * 0.1) }}
              className="flex items-center gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${tech.color}`} />
              <span className="font-mono text-sm font-bold tracking-widest">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
