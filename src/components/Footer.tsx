import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-bold tracking-tighter">
            VIKASH<span className="text-primary">.KUMAR</span>
          </a>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Java Backend Developer & Spring Boot Specialist
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-400">
          © {currentYear} Vikash Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
