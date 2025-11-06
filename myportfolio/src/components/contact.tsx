"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // ✅ Strongly type ChangeEvent for input and textarea
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Strongly type FormEvent for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 md:px-16"
    >
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] z-0"
      />

      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-16">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center space-y-8 bg-slate-800/40 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-700 hover:border-blue-400 transition-all duration-300"
        >
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">
            Contact Information
          </h3>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-400 w-6 h-6" />
            <p>wertman99999@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-400 w-6 h-6" />
            <p>+251 972241817</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-400 w-6 h-6" />
            <p>DireDawa, Ethiopia</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            {[
              { icon: Github, href: "https://github.com/termuze0" },
              { icon: Linkedin, href: "https://linkedin.com/in/termuze" },
              { icon: Twitter, href: "https://x.com/term2277" },
              { icon: Instagram, href: "https://instagram.com/termuze" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-700 hover:bg-blue-500 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-slate-800/40 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-slate-700 hover:border-blue-400 transition-all duration-300"
        >
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">
            Send Me a Message
          </h3>

          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-blue-400 outline-none transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-blue-400 outline-none transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-blue-400 outline-none transition-all duration-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </div>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-400 mt-4 font-medium"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(120%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.29C906.67,57,823.78,37.09,739.19,37.09c-93.36,0-182.06,26.46-265.84,53.47C364.84,117.43,278.06,143.9,183.36,143.9c-61.64,0-120.28-8.89-174.36-24.75V120H1200V27.35C1136.27,49.77,1066.92,74.91,985.66,83.29Z"
            fill="#2563eb"
          ></path>
        </svg>
      </div>
    </section>
  );
}
