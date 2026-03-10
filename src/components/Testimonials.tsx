import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechFlow",
    content: "Vikash delivered an exceptional backend for our e-commerce platform. His attention to security and performance was exactly what we needed.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "Founder of ServiceLink",
    content: "The role-based authentication system Vikash built is robust and easy to maintain. He is a true Spring Boot expert.",
    image: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at InnovateX",
    content: "Working with Vikash was a breeze. He understood our requirements perfectly and delivered high-quality APIs on time.",
    image: "https://picsum.photos/seed/emily/100/100"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">Client Testimonials</h2>
          <p className="text-slate-800 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my previous clients have to say about my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/5" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white">{testimonial.name}</h4>
                  <p className="text-xs text-slate-600 font-medium">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-800 dark:text-slate-400 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
