import { motion } from "motion/react";
import { ShieldCheck, Zap, Layers } from "lucide-react";

const highlightCards = [
  {
    title: "Secure",
    description: "JWT & Spring Security Implementation",
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Performant",
    description: "Optimized Queries & Caching",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Scalable",
    description: "Layered Architecture & Clean Code",
    icon: Layers,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-950 dark:text-white">Building End-to-End Solutions for Modern Businesses</h2>
            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-300 mb-6 leading-relaxed">
              I am Vikash Kumar, a Java Full Stack Developer with 3+ years of hands-on experience in building scalable web applications using React and Spring Boot.
            </p>
            <p className="text-base sm:text-lg text-slate-900 dark:text-slate-300 mb-8 leading-relaxed">
              My expertise spans across the entire development lifecycle—from crafting intuitive user interfaces with React to architecting secure, high-performance backends with Java. I focus on delivering seamless, production-ready products that solve real-world problems.
            </p>
            
            <div className="flex items-center gap-4 sm:gap-6 mb-10 p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-primary">3+</div>
              <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 leading-relaxed">
                Years of Professional<br />Full Stack Experience
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {highlightCards.map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/30 transition-colors group"
                >
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3 transition-transform`}
                  >
                    <card.icon className="w-5 h-5" />
                  </motion.div>
                  <h4 className="font-bold text-sm mb-1 text-slate-950 dark:text-white">{card.title}</h4>
                  <p className="text-[10px] text-slate-900 dark:text-slate-400 leading-tight font-medium">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Code Editor Graphic */}
            <div className="aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border border-white/10 p-1 flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/50 border-b border-white/5">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 tracking-widest uppercase">FullStack.java</div>
                <div className="w-10 sm:w-12" /> {/* Spacer */}
              </div>
              
              {/* Code Content */}
              <div className="flex-1 p-4 sm:p-8 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="space-y-1"
                >
                  <p><span className="text-purple-400">@Service</span></p>
                  <p><span className="text-purple-400">public class</span> <span className="text-yellow-200">FullStackSpecialist</span> {"{"}</p>
                  <p className="ml-4"><span className="text-purple-400">private final</span> <span className="text-blue-300">Experience</span> exp = <span className="text-orange-400">3_YEARS</span>;</p>
                  <p className="ml-4"><span className="text-purple-400">private final</span> <span className="text-blue-300">Stack</span> stack = <span className="text-emerald-400">REACT_SPRING_BOOT</span>;</p>
                  <br />
                  <p className="ml-4"><span className="text-blue-400">@PostConstruct</span></p>
                  <p className="ml-4"><span className="text-purple-400">public void</span> <span className="text-blue-400">init</span>() {"{"}</p>
                  <p className="ml-8 text-slate-500">// Building secure & scalable systems</p>
                  <p className="ml-8 text-slate-500">// with Spring Boot & Java</p>
                  <p className="ml-4">{"}"}</p>
                  <p>{"}"}</p>
                </motion.div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
