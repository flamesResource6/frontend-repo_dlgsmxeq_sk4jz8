import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white dark:from-black/40 dark:via-black/30 dark:to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
            Interactive • Playful • Modern
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Prism AI Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A tech-forward portfolio with immersive 3D, smooth micro-interactions, and a flexible theme. Explore projects, skills, and contact in a refined, animated experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg px-5 py-3 font-medium text-violet-700 dark:text-violet-300 ring-1 ring-violet-600/20 hover:ring-violet-600/40">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
