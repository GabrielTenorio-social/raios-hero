import EnergyRays from "./ConvergenceRays"
import HeroText from "./HeroText"

function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-gradient-to-b from-zinc-900 to-slate-700">
      <HeroText />
      <EnergyRays />
    </div>
  )
}

export default Hero
