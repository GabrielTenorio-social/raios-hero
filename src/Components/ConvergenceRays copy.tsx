import { motion } from "framer-motion";
import { memo, useEffect, useMemo } from "react";

interface EnergyRayProps {
  path: string
  delay: number
}

const EnergyRay = memo(function EnergyRay({ path, delay }: EnergyRayProps) {
  return (
    <motion.path
      d={path}
      stroke="url(#ray-gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      filter="url(#glow)"
      strokeDasharray="500"
      strokeDashoffset="500"
      animate={{
        strokeDashoffset: 0,
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: 9999,
        delay: delay,
      }}
    />
  )
})

export default function EnergyRays() {
  const delays = useMemo(() =>
    Array.from({ length: 16 }, () => Math.random() * 7),
  []);

  const rays = [
    { path: "M895 962V2", delay: delays[0] },
    { path: "M1 959L842 1", delay: delays[1] },
    { path: "M85 961.5L851 1", delay: delays[2] },
    { path: "M200 960.5L858 1", delay: delays[3] },
    { path: "M313.5 961.5L865 1", delay: delays[4] },
    { path: "M448 962L871 3", delay: delays[5] },
    { path: "M545.5 961.5L879 3", delay: delays[6] },
    { path: "M660.5 960.5L884 3", delay: delays[7] },
    { path: "M775 960L890 3", delay: delays[8] },
    { path: "M1790 959L949 1", delay: delays[9] },
    { path: "M1706 961.5L940 1", delay: delays[10] },
    { path: "M1591 960.5L933 1", delay: delays[11] },
    { path: "M1477.5 961.5L926 1", delay: delays[12] },
    { path: "M1343 962L920 3", delay: delays[13] },
    { path: "M1245.5 961.5L912 3", delay: delays[14] },
    { path: "M1130.5 960.5L907 3", delay: delays[15] },
    { path: "M1016 960L901 3", delay: delays[16] },
  ]

  useEffect(() => {
    console.log("EnergyRays mounted")

    return () => console.log("EnergyRays unmounted");
  })

  return (
    <svg
      viewBox="0 0 1764 962"
      className="w-full h-full overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ray-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="35%" stopColor="#902eff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff2e69" stopOpacity="1" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {rays.map((ray) => (
        <EnergyRay key={ray.path} delay={ray.delay} path={ray.path} />
      ))}
    </svg>
  );
}
