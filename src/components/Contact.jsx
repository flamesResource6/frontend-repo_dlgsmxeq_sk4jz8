import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Let’s collaborate</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300">Have an idea or opportunity? Send an email and I’ll get back soon.</p>
            </div>
          </div>

          <form action="mailto:you@example.com" method="post" encType="text/plain" className="mt-6 grid grid-cols-1 gap-4">
            <input className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your name" required />
            <input type="email" className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Email address" required />
            <textarea rows={4} className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Message" required />
            <motion.button whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              <Send className="h-4 w-4" /> Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
