import { useEffect, useState } from 'react';
import { Rocket, Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved || 'dark';
    setTheme(initial);
    if (initial === 'dark') document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-black/40 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-gray-900 dark:text-gray-100">Prism Folio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">Projects</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">About</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">Contact</a>
            <div className="h-5 w-px bg-gray-200 dark:bg-gray-800" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-md px-3 py-1.5 text-xs font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </button>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/50 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            <a href="#projects" className="block text-gray-800 dark:text-gray-200">Projects</a>
            <a href="#about" className="block text-gray-800 dark:text-gray-200">About</a>
            <a href="#contact" className="block text-gray-800 dark:text-gray-200">Contact</a>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <button onClick={toggleTheme} className="ml-auto rounded-md px-3 py-1.5 text-xs font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
