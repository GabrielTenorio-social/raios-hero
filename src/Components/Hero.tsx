import EnergyRays from "./ConvergenceRays"
import HeroText from "./HeroText"

function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-gradient-to-t from-zinc-900 to-black">
    {/* <div className="w-full h-screen overflow-hidden relative bg-radial-[at_50%_95%] to-zinc-900 from-blue-950"> */}
      <HeroText />
      <EnergyRays />
    </div>
  )
}

export default Hero
