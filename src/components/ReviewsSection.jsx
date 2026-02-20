import { motion as Motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Ketan Kataria",
    text: "Tushar from VJ2 Consulting has helped our Bhanushali Chamber of Commerce to work as a structured international organization. He has helped to add new members to the team, build leadership structure and make organization ready for scale.",
  },
  {
    name: "Ajay Tiwari",
    text: "VJ2 Consulting has helped us to create robust strategy of our new business stream. They helped us with automations, workflow management and execute our go to market strategy successfully.",
  },
  {
    name: "Aya Nakamura",
    text: "Vj2 Consulting helped us cut costs 20% while improving service levels.",
  },
  {
    name: "Mateo García",
    text: "Their AI-driven insights transformed our operations and morale.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Client Reviews</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </Motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-accent opacity-80" />

              {/* Text */}
              <p className="italic leading-relaxed text-secondary pr-5">“{r.text}”</p>

              {/* Name */}
              <h6 className="mt-5 font-semibold text-primary">{r.name}</h6>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
