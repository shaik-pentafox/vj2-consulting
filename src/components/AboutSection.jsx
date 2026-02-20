import { FadeIn } from "./animations/FadeIn";
import { motion as Motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              About VJ2 Consulting
            </h2>

            <p className="mt-3 text-secondary font-medium">
              Operations & Management
            </p>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
          </div>
        </FadeIn>

        {/* Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <FadeIn delay={0.1}>
            <Motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-primary">
                Consulting Experts
              </h4>

              <p className="mt-3 leading-relaxed text-secondary">
                For over 5 years, VJ2 Consulting has partnered with startups and
                SMEs to improve profitability and scalability through automation,
                process improvements, and AI-driven solutions.
              </p>
            </Motion.div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2}>
            <Motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-primary">
                Trusted Management Consulting
              </h4>

              <p className="mt-3 leading-relaxed text-secondary">
                We ensure strategies translate into execution. Our consultants
                work directly on operations to drive faster results and
                measurable outcomes.
              </p>
            </Motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}