import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I craft delightful web experiences that merge aesthetics with performance. My focus is on building expressive interfaces, designing thoughtful systems, and experimenting with motion and 3D to tell a story.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              This portfolio demonstrates a theme-forward approach: clear visual hierarchy, responsive layout, and immersive yet accessible animations.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Core Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>React, Vite, Tailwind</li>
              <li>Framer Motion, Spline 3D</li>
              <li>FastAPI, MongoDB</li>
              <li>Design Systems & Accessibility</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
