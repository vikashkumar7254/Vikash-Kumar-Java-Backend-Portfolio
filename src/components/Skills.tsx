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
      { name: "Microservices", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Redux / Context API", level: "Proficient" },
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
      { name: "AWS", level: "Intermediate" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Technical Proficiency</h2>
          <p className="text-slate-800 dark:text-slate-400 max-w-2xl mx-auto">
            I specialize in the Java ecosystem and modern frontend frameworks, focusing on building robust, secure, and user-friendly full stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-2xl bg-primary/10 text-primary"
                >
                  <category.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-slate-950 dark:text-white group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-400">{skill.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
