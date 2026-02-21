import { motion as Motion } from "framer-motion";

// import Service1 from "../assets/Service1.png";
// import Service2 from "../assets/Service2.png";
// import Service3 from "../assets/Service3.png";
// import Service4 from "../assets/Service4.jpg";
// import Service5 from "../assets/Service5.png";
// import Service6 from "../assets/Service6.jpg";
// import Service7 from "../assets/Service7.png";
// import Service8 from "../assets/Service8.png";
// import Service9 from "../assets/Service9.png";
import Service1 from "../assets/Services1.png";
import Service2 from "../assets/Services2.png";
import Service3 from "../assets/Services3.png";
import Service4 from "../assets/Services4.png";
import Service5 from "../assets/Services5.png";
import Service6 from "../assets/Services6.png";
import Service7 from "../assets/Services7.png";
import Service8 from "../assets/Services8.png";
import Service9 from "../assets/Services9.png";

const services = [
  {
    title: "Workforce Management Solutions",
    img: Service9,
    desc: "We optimize planning, staffing, forecasting, Real-time Management and service levels with AI-powered insights and best-in-class processes.",
  },
  { title: "Automation AI", img: Service1, desc: "We boost efficiency and cash flow using Process Optimization and AI/ML across industries." },
  { title: "Workflow Automation", img: Service2, desc: "Scalable automation that improves accuracy and ROI across complex operations." },
  { title: "Process Optimization", img: Service3, desc: "We identify bottlenecks and improve productivity with KPI-driven optimization." },
  {
    title: "Start-up Mentorship",
    img: Service4,
    desc: "We help start-ups to design and deploy scalable, integrated automation that reduces delays, improves accuracy and drives measurable ROI across complex operations. We consult Start-up to become cash flow positive by implementing cadence on reporting, cadence and governances. We helping them build scalable leadership practices and funding at various stages via our VC funding partnerships.",
  },
  {
    title: "Time-share Leadership",
    img: Service5,
    desc: "We have group of experienced leaders with more than 25 years of industry experience which can be leveraged by start-ups who cannot afford full time costly resources, however need service quality.",
  },
  {
    title: "Independent Director Services",
    img: Service6,
    desc: "We have multiple qualified Independent Directors with diverse industry / domain expertise who can be on boarded by our clients.",
  },
  {
    title: "Contact Centre Management Tools",
    img: Service7,
    desc: "We have solutions to deliver a comprehensive suite of contact centre products designed to power end-to-end customer engagement across voice, CRM, and AI-driven interactions. We help in Outbound campaign orchestration and inbound call handling to CRM-embedded communications and AI-powered voice-bots.",
  },
  {
    title: "Business Process Re-engineering",
    img: Service8,
    desc: "We rethink how your business operates to cut inefficiencies and produce tangible outcomes. We assist you in achieving quantifiable increases in productivity and cost control by utilizing technology and coordinating processes with strategy.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </Motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="group rounded-xl bg-white/10 p-5 shadow-lg backdrop-blur-md transition hover:bg-white/15 hover:shadow-xl transform-gpu"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {s.desc}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
