import { useState, useEffect } from "react"
import AppRoute from "./routes/app.route"
import GooeyNav from "./components/GooeyNav.js"
import LightRays from "./components/LightRays.tsx"
import Loading from "./pages/loading"

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* Fullscreen Background */}

      <div className="fixed inset-0 -z-10 pointer-events-none">

        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="w-full h-full"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />

      </div>

      {/* Navbar */}

      <nav
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-black/10
        border-b border-white/10
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          h-16
          px-6
          flex
          items-center
          justify-between
          "
        >

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider cursor-pointer">
            SV
          </div>

          {/* Navigation */}
          <GooeyNav
            items={items}
            particleCount={20}
            particleDistances={[90, 10]}
            particleR={300}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={600}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />

        </div>

      </nav>

      {/* Main Content */}

      <main className="relative z-10 pt-16">
        <AppRoute />
      </main>

    </div>
  )
}

export default App