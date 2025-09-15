import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion"
import { useRef, useState } from "react";

function GlassCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-32">
      <h2 className="text-xl font-semibold mb-4">Card Title 1</h2>
      <p className="text-gray-300">This is a description for card 1.</p>
    </div>
  )
}

function GlassGrid() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    offset: [-0.5, 0.5],
    target: scrollRef
  });
  const [rotateX, setRotateX] = useState(5)
  const [translateZ, setTranslateZ] = useState(-30)
  const [perspective, setPerspective] = useState(100)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setRotateX(5 - latest * 5)
    setTranslateZ(-30 + latest * -30)
    setPerspective(100 + latest * 200)
  })

  return (
    <div
      className="w-full p-60"
      style={{ perspective }}
      ref={scrollRef}
    >
      <motion.div
        className="grid grid-cols-5 relative gap-4"
        style={{
          originX: 0.5,
          originY: 1,
          rotateX: rotateX,
          translateZ: translateZ,
        }}
        viewport={{ root: scrollRef }}
      >
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
        <GlassCard />
      </motion.div>
    </div>
  )
}

export default GlassGrid
