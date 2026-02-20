import { motion as Motion } from "framer-motion";
import AnimatedCounter from "./animations/AnimatedCounter";

const stats = [
  { value: "60", label: "Clients Served" },
  { value: "80+", label: "Projects Completed" },
  { value: "5", label: "Years of Experience" },
  { value: "95%", label: "Satisfaction Rate" },
];

export default function StatsSection() {
  return (
    <section className="bg-primary py-16 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-2 text-gray-500">At VJ2 Consulting, transparency is fundamental to building trust and delivering measurable value. Our latest performance metrics and key numbers highlight the impact we create for our clients. For further information, please feel free to get in touch with us.</p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </Motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-white/10 p-6 text-center backdrop-blur-md shadow-lg transition hover:bg-white/15"
            >
              {/* Animated Number */}
              <h3 className="text-4xl font-bold text-accent">
                <AnimatedCounter value={s.value} />
              </h3>

              {/* Label */}
              <p className="mt-2 text-white/80">{s.label}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}