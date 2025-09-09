import { motion } from "framer-motion";

interface EnergyRayProps {
  path: string
}

function EnergyRay({ path }: EnergyRayProps) {
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
        repeat: Infinity,
        delay: Math.random() * 7,
      }}
    />
  )
}

export default function EnergyRays() {
  return (
    <svg
      viewBox="0 0 1764 962"
      className="w-full h-full"
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

      <EnergyRay path="M895 962V2"/>
      <EnergyRay path="M1 959L842 1"/>
      <EnergyRay path="M85 961.5L851 1"/>
      <EnergyRay path="M200 960.5L858 1"/>
      <EnergyRay path="M313.5 961.5L865 1"/>
      <EnergyRay path="M448 962L871 3"/>
      <EnergyRay path="M545.5 961.5L879 3"/>
      <EnergyRay path="M660.5 960.5L884 3"/>
      <EnergyRay path="M775 960L890 3"/>
      <EnergyRay path="M1790 959L949 1"/>
      <EnergyRay path="M1706 961.5L940 1"/>
      <EnergyRay path="M1591 960.5L933 1"/>
      <EnergyRay path="M1477.5 961.5L926 1"/>
      <EnergyRay path="M1343 962L920 3"/>
      <EnergyRay path="M1245.5 961.5L912 3"/>
      <EnergyRay path="M1130.5 960.5L907 3"/>
      <EnergyRay path="M1016 960L901 3"/>

    </svg>
  );
}
