import { motion } from "motion/react";
import { Server, Smartphone, Shield, Database, Bug, Zap } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Building complete, end-to-end web applications using React for the frontend and Spring Boot for the backend.",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Responsive Frontend Design",
    description: "Crafting beautiful, responsive, and user-friendly interfaces using React, Tailwind CSS, and modern UI/UX principles.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Secure Backend Systems",
    description: "Implementing robust security with JWT, OAuth2, and Spring Security to protect your data and users.",
    icon: Shield,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Database Architecture",
    description: "Designing scalable database schemas and optimizing complex queries for high-performance data management.",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "API Integration & Dev",
    description: "Developing and integrating RESTful APIs to connect your frontend with powerful backend services seamlessly.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Maintenance & Support",
    description: "Providing ongoing technical support, bug fixing, and performance tuning for existing full stack applications.",
    icon: Bug,
    color: "text-red-500",
    bg: "bg-red-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Services I Offer</h2>
          <p className="text-slate-800 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive full stack solutions designed to bring your ideas to life with a focus on performance, security, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-transform`}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-slate-950 dark:text-white">{service.title}</h3>
              <p className="text-slate-800 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
