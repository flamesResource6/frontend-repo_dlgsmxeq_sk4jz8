import { motion } from 'framer-motion';
import { Code2, Sparkles, Layout, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI System',
    description: 'A polished component library with motion-first interactions and dark neon aesthetic.',
    icon: <Layout className="h-5 w-5" />,
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'AI Prompt Studio',
    description: 'Toolkit for crafting, testing, and sharing prompts with versioning and analytics.',
    icon: <Sparkles className="h-5 w-5" />,
    tags: ['FastAPI', 'MongoDB', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Dev Showcase',
    description: 'A blazing-fast portfolio template with Spline integration and theming.',
    icon: <Code2 className="h-5 w-5" />,
    tags: ['Vite', 'Spline', 'Vercel'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A few highlights that blend design, code, and motion.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">
            Explore all <LinkIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 backdrop-blur p-5 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-500/10">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700/90 dark:text-gray-300/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2.5 py-1 ring-1 ring-black/5 dark:ring-white/10">{t}</span>
                ))}
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-violet-500/20 blur-2xl"
                animate={{ x: [0, -10, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
