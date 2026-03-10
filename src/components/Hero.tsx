import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Secure JWT Authentication",
  "Role-Based Access Control",
  "High-Performance REST APIs",
  "Database Optimization"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 tracking-wider uppercase">
            Available for Remote & Freelance Projects
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-slate-950 dark:text-white">
            Java Backend Developer Specializing in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Secure & Scalable API Systems
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            I help startups and businesses build production-ready backend systems using Spring Boot, secure authentication, and optimized database architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-all"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-mono text-sm font-bold tracking-widest">JAVA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-mono text-sm font-bold tracking-widest">SPRING BOOT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-mono text-sm font-bold tracking-widest">MYSQL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-mono text-sm font-bold tracking-widest">DOCKER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
