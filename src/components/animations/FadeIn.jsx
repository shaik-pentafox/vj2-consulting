import { motion as Motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0 }) => (
  <Motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay,
      ease: "easeOut",
    }}
    viewport={{
      once: false,        // still animates up/down
      amount: 0.35,       // prevents jitter near edges
    }}
    style={{ willChange: "transform, opacity" }} 
    className="transform-gpu"
  >
    {children}
  </Motion.div>
);