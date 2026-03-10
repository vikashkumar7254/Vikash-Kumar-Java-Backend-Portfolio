import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
          <a href="https://github.com/vikashkumar7254/Vikash-Kumar-Java-Backend-Portfolio" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kumarvikash7479" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:vikashkumar059.dev@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          © {currentYear} Vikash Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
