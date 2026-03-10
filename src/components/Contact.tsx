"use client";

import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL;
      
      if (scriptUrl) {
        // Send data to Google Sheets via Apps Script
        // Using fetch with 'no-cors' mode if the script doesn't handle CORS, 
        // but standard POST is better if the script is set up correctly.
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Apps Script often requires no-cors for simple web apps
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } else {
        console.warn("Google Sheet Script URL not found in environment variables.");
        // Fallback for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setIsSubmitted(true);
      reset();
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s Build Your Backend the Right Way
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              Have a backend challenge or need a scalable API system?  
              I’m available for freelance and remote backend projects.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Email Me
                  </p>
                  <a
                    href="mailto:vikashkumar059.dev@gmail.com"
                    className="font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  >
                    vikashkumar059.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kumarvikash7479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  >
                    linkedin.com/in/kumarvikash7479
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    India (Open to Remote)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex gap-4">
              <a
                href="https://github.com/vikashkumar7254"
                target="_blank"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/kumarvikash7479"
                target="_blank"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:vikashkumar059.dev@gmail.com"
                className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-semibold">Subject</label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-xs text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : isSubmitting 
                      ? "bg-slate-400 text-white cursor-not-allowed"
                      : "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                }`}
              >
                {isSubmitted ? (
                  "Message Sent!"
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}