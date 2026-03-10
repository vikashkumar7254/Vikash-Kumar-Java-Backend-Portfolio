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
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbweg6UvkShVtJOLrJ0LfijBlTBOSw5AVCpp1ds9NsgS_zE14iSflSRQRSy1ImQ9ad_a/exec";
      
      if (scriptUrl) {
        // Send data to Google Sheets via Apps Script
        // Using URLSearchParams for better compatibility with no-cors and Apps Script doPost(e)
        const params = new URLSearchParams();
        params.append('name', data.name);
        params.append('email', data.email);
        params.append('subject', data.subject);
        params.append('message', data.message);

        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: params,
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-950 dark:text-white">
              Let’s Build Your Full Stack App the Right Way
            </h2>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-400 mb-10">
              Have a project idea or need a scalable full stack system?  
              I’m available for freelance and remote full stack projects.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {[
                { 
                  label: "Email Me", 
                  value: "vikashkumar059.dev@gmail.com", 
                  href: "mailto:vikashkumar059.dev@gmail.com",
                  icon: Mail,
                  color: "bg-primary/10 text-primary"
                },
                { 
                  label: "LinkedIn", 
                  value: "linkedin.com/in/kumarvikash7479", 
                  href: "https://www.linkedin.com/in/kumarvikash7479",
                  icon: Linkedin,
                  color: "bg-blue-500/10 text-blue-500"
                },
                { 
                  label: "Location", 
                  value: "India (Open to Remote)", 
                  icon: MapPin,
                  color: "bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 transition-transform`}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/vikashkumar7254/Vikash-Kumar-Java-Backend-Portfolio" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kumarvikash7479" },
                { icon: Mail, href: "mailto:vikashkumar059.dev@gmail.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:text-primary transition-colors border border-slate-100 dark:border-slate-700"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base text-slate-950 dark:text-white"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base text-slate-950 dark:text-white"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">Subject</label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base text-slate-950 dark:text-white"
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-[10px] text-red-500 mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-sm sm:text-base text-slate-950 dark:text-white"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-[10px] text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
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