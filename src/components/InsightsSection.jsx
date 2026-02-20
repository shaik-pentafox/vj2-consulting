import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const insights = [
  {
    title: "Logistics & Supply Chain",
    text: "We help logistics and supply chain organizations streamline operations, improve real-time visibility, and optimize workforce productivity. Our expertise includes centralized command centres, workforce planning, process automation, and KPI-driven performance management. We enable logistics companies to reduce operational costs, improve turnaround times, and enhance service reliability through intelligent automation and data-driven decision-making.",
  },
  {
    title: "IT & ITES",
    text: "We support IT and ITES organizations in optimizing service delivery, workforce utilization, and operational efficiency. Our solutions focus on workforce management, automation of repetitive processes, performance analytics, and scalable operational frameworks. We help ITES organizations improve service levels, reduce overhead, and build scalable operating models aligned with global delivery standards.",
  },
  {
    title: "BFSI (Banking, Financial Services & Insurance)",
    text: "We help BFSI organizations modernize operations, improve compliance readiness, and enhance customer experience through digital transformation and process optimization. Our expertise includes workflow automation, operational risk reduction, workforce optimization, and AI-driven performance monitoring. We enable financial institutions to improve operational agility, reduce costs, and support scalable, compliant growth.",
  },
];

export default function InsightsSection() {
  const [open, setOpen] = useState(0); // first open by default

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto  px-6">
        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Industry Insights</h2>
            <p className="mt-2 text-secondary">At VJ2 Consulting, we bring deep operational expertise and technology-driven solutions across key industries, helping organizations improve efficiency, scalability, and customer experience.</p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
          </div>
        </FadeIn>

        {/* Accordion */}
        <div className="mt-10 space-y-4">
          {insights.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Header */}
                <button onClick={() => setOpen(open === idx ? null : idx)} className="flex w-full items-center justify-between px-6 py-4 text-left">
                  <h3 className="font-semibold text-primary">{item.title}</h3>

                  <Motion.div animate={{ rotate: open === idx ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="text-accent" />
                  </Motion.div>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {open === idx && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-secondary leading-relaxed">{item.text}</div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
