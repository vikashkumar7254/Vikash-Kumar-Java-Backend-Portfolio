import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Clean Architecture",
    description:
      "Layered architecture with SOLID principles ensuring scalable and maintainable codebases."
  },
  {
    title: "Production-Ready Code",
    description:
      "Designed with real-world deployment in mind using best practices and robust design patterns."
  },
  {
    title: "Secure Implementation",
    description:
      "Enterprise-grade security using JWT, OAuth2, RBAC, and Spring Security standards."
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Kafka-based asynchronous messaging for scalable and loosely coupled distributed systems."
  },
  {
    title: "High-Performance Optimization",
    description:
      "Redis caching, query tuning, and connection pooling for fast and efficient backend performance."
  },
  {
    title: "Clear Communication & Support",
    description:
      "Transparent communication, clean documentation (Swagger/OpenAPI), and long-term technical support."
  }
];

export function WhyWorkWithMe() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Why Work With Me?</h2>
          <p className="text-slate-800 dark:text-slate-300 max-w-2xl mx-auto">
            I don't just write code; I build robust foundations for your business to grow upon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex gap-4 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-slate-950 dark:text-white">{reason.title}</h3>
                <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
