import { motion } from "motion/react";
import { Server, Smartphone, Shield, Database, Bug, Zap } from "lucide-react";

const services = [
  {
    title: "Custom REST API Development",
    description: "Building scalable and well-documented RESTful APIs using Spring Boot and Java.",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Backend for Mobile Apps",
    description: "Robust backend infrastructure designed specifically for high-performance mobile applications.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Authentication & Security",
    description: "Implementing secure JWT-based authentication and role-based access control systems.",
    icon: Shield,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Database Optimization",
    description: "Designing efficient database schemas and optimizing complex SQL queries for performance.",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Bug Fixing & Maintenance",
    description: "Identifying and resolving critical backend issues and ensuring system stability.",
    icon: Bug,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Performance Tuning",
    description: "Optimizing backend performance through caching, multithreading, and code refactoring.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Services I Offer</h2>
          <p className="text-slate-800 dark:text-slate-300 max-w-2xl mx-auto">
            Specialized backend solutions tailored to your business needs, with a focus on security and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-10 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group"
            >
              <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
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
