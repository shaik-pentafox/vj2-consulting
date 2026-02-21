import HeaderImg from "../assets/Header.png";
import Logo from "../assets/LogoDark.png";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const nav = [
  { label: "About", link: "#about" },
  { label: "Services", link: "#services" },
  { label: "Contact", link: "#contact" },
];

export default function HeroHeader() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeaderImg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/30" />

      {/* Navbar */}
      <Motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-20 flex items-center justify-between px-5 py-4 md:px-10">
        <img src={Logo} className="h-9 md:h-12" />

        {/* Desktop Nav */}
        <nav className="hidden gap-8 text-primary font-medium md:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.link} className="cursor-pointer hover:text-accent transition">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="text-primary md:hidden cursor-pointer">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 z-20 w-full bg-primary/25 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-20 text-primary font-medium text-lg">
              {nav.map((item) => (
                <a key={item.label} href={item.link} onClick={() => setOpen(false)} className="hover:text-accent transition">
                  {item.label}
                </a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[80vh] w-full flex flex-col justify-end  px-5 pb-12 md:px-10">
        <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Title */}
            <h1 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-6xl">Transforming Customer Journeys</h1>

            {/* Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-accent px-6 py-3 font-semibold text-primary shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-95 md:self-auto"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
