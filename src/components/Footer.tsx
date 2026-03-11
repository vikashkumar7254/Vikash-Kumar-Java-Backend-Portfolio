import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-bold tracking-tighter text-slate-950 dark:text-white">
            VIKASH<span className="text-primary">.KUMAR</span>
          </a>
          <p className="text-sm text-slate-800 dark:text-slate-400 mt-2">
            Java Full Stack Developer & Spring Boot Specialist
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/vikashkumar7254/Vikash-Kumar-Java-Backend-Portfolio" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kumarvikash7479" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:vikashkumar059.dev@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" title="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://docs.google.com/document/d/1CiQigXTWY65a9H5eNtut5-v2TWLVfoN-/edit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            title="Download Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          © {currentYear} Vikash Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
