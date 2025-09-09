import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });

      console.log("mouse moved")
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-10 h-10 rounded-full border border-white/50"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
