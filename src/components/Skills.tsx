import { motion } from "motion/react";
import { Code2, Database, Terminal, Shield, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code2,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Spring Security", level: "Advanced" },
      { name: "Hibernate / JPA", level: "Advanced" },
      { name: "REST API", level: "Expert" },
      { name: "JWT Auth", level: "Expert" },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Proficient" },
      { name: "Postman", level: "Expert" },
      { name: "Microservices", level: "Intermediate" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My core strength lies in the Java ecosystem, focusing on building robust and secure backend architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">{skill.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
