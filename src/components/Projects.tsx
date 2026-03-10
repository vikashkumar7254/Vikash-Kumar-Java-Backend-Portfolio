"use client";

import { motion, AnimatePresence } from "motion/react";
import { Github, Code, Star, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/src/lib/utils";

/* =======================
   Type Definition
======================= */

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  category: string;
  featured?: boolean;
}

/* =======================
   Projects Data
======================= */

const projects: Project[] = [
  {
    title: "NDAL-ALIS (Arms License)",
    description:
      "Contributed to the development and maintenance of the National Database of Arms Licenses (NDAL-ALIS) for the Ministry of Home Affairs. Focused on secure backend modules, data integrity, and enterprise-level authentication.",
    tech: ["Java", "Spring Boot", "Oracle", "Security", "Enterprise"],
    link: "https://ndal-alis.gov.in/armslicence/",
    category: "Government",
    featured: true,
  },
  {
    title: "UMANG Platform Integration",
    description:
      "Worked on backend integration for various government services within the UMANG platform, ensuring high availability and seamless user experience for millions of citizens across multiple departments.",
    tech: ["Java", "Microservices", "API Integration", "Scalability"],
    link: "https://web.umang.gov.in/",
    category: "Government",
    featured: true,
  },
  {
    title: "GST Portal Backend",
    description:
      "Contributed to the backend architecture of the GST portal, handling complex tax calculations, filing processes, and high-concurrency data transactions for the national tax system.",
    tech: ["Java", "Spring Boot", "MySQL", "Scalability", "Enterprise"],
    link: "https://www.gst.gov.in/",
    category: "Government",
  },
  {
    title: "PWC Enterprise Solutions",
    description:
      "Developed enterprise-grade backend solutions for PWC clients, focusing on financial data processing, compliance reporting, and secure API design for global business requirements.",
    tech: ["Java", "Spring Boot", "Enterprise", "Security"],
    link: "https://www.pwc.in/",
    category: "Enterprise",
  },
  {
    title: "BLL Tutor - Online Learning Platform Backend",
    description:
      "Developed a full-scale online learning management system supporting students, teachers, and admins. Features include course purchasing, secure online payments, certificate generation, and real-time chat.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
      "WebSocket",
    ],
    github: "https://github.com/vikashkumar7254/BLL_totur",
    category: "Enterprise",
  },
  {
    title: "Real-Time Crypto WebSocket API",
    description:
      "Integrated CoinDCX WebSocket API to stream real-time cryptocurrency market data. Implemented asynchronous message handling and optimized processing using Java.",
    tech: ["Java", "WebSocket", "API Integration"],
    github: "https://github.com/vikashkumar7254/CoinDCX-WebSocket-API",
    category: "Distributed",
  },
];

/* =======================
   Filter Tabs
======================= */

const filterTabs = [
  "All",
  "Java",
  "Spring Boot",
  "Government",
  "Enterprise",
  "Distributed",
  "Security",
];

/* =======================
   Component
======================= */

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) =>
        project.tech.some(
          (tech) => tech.toLowerCase() === activeFilter.toLowerCase()
        ) ||
        project.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950 dark:text-white">
              Featured Backend Projects
            </h2>
            <p className="text-slate-800 dark:text-slate-300">
              Selected backend systems demonstrating scalable architecture,
              real-time processing, enterprise features, and production-ready
              API design.
            </p>
          </div>

          <a
            href="https://github.com/vikashkumar7254/Vikash-Kumar-Java-Backend-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold flex items-center gap-2 hover:underline"
          >
            View all on GitHub <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                activeFilter === tab
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8">
                  {/* Category + Featured Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <Code className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 text-[10px] bg-primary text-white px-3 py-1 rounded-full uppercase tracking-wider">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-slate-950 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-800 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-xl text-sm font-medium hover:bg-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all",
                          project.github 
                            ? "flex-1 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary" 
                            : "w-full bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                        )}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Project
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}