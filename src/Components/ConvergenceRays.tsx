import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EnergyRays() {
  const refs = useRef<SVGPathElement[]>([]);
  const rays = [
      "M1149 1960L1149 0",
      "M0.999862 1960C1148.03 1958.5 1149.21 0 1149.21 0",
      "M575.495 1960C1148.03 1958.5 1149.21 0 1149.21 0",
      "M283.925 1960C1151.96 1956 1149.21 0 1149.21 0",
      "M862.35 1960C1151.96 1958.5 1149.21 0 1149.21 0",
      "M1005.38 1960C1149.99 1960.5 1149.21 0 1149.21 0",
      "M0.999897 980C1149.21 980 1149.21 0 1149.21 0",
      "M0.999734 1214C1146.45 1214 1149.21 0 1149.21 0",
      "M0.999857 1460C1151.96 1460 1149.21 0 1149.21 0",
      "M0.999815 1749C1144.49 1749 1149.21 0 1149.21 0",
      "M2409 1960C1150.56 1958.5 1149.26 0 1149.26 0",
      "M1778.7 1960C1150.55 1958.5 1149.26 0 1149.26 0",
      "M2098.59 1960C1146.24 1956 1149.26 0 1149.26 0",
      "M1463.98 1960C1146.24 1958.5 1149.26 0 1149.26 0",
      "M1307.05 1960C1148.4 1960.5 1149.26 0 1149.26 0",
      "M2409 980C1149.26 980 1149.26 0 1149.26 0",
      "M2409 1214C1152.28 1214 1149.26 0 1149.26 0",
      "M2409 1460C1146.24 1460 1149.26 0 1149.26 0",
      "M2409 1749C1154.44 1749 1149.26 0 1149.26 0",
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: false,
    });

    refs.current.forEach(rayElement => {
      if (!rayElement) return
      const totalLength = rayElement.getTotalLength()
      const segmentLength = 400
      const delay = Math.random() * 7

      timeline.from(
        rayElement,
        { strokeDasharray: `${segmentLength} ${totalLength - segmentLength}`,
          strokeDashoffset: 0,
          strokeWidth: 10,
          opacity: 1
        },
        delay
      );
      timeline.to(
        rayElement,
        {
          opacity: 0.2,
          animationDelay: -1,
          strokeDashoffset: -totalLength,
          strokeWidth: 0,
          duration: 9,
          ease: "none",
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: false,
        },
        delay
      );
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <svg
      viewBox="0 0 2410 1960"
      className="w-[2410px] h-[1960px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ray-gradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          {/* <stop offset="35%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="1" /> */}
          <stop offset="25%" stopColor="#902eff" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#ff2e69" stopOpacity="1" />
        </linearGradient>

        {/* <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter> */}
      </defs>

      {rays.map((path, i) => (
        <path
          key={path}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          d={path}
          stroke="url(#ray-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          strokeDasharray="500"
        />
      ))}
    </svg>
  );
}
