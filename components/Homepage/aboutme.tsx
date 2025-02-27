'use client';
import { useState } from 'react';
import { ClipboardCopyIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export const HeroBtn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setLoading(true);

    navigator.clipboard.writeText('npx venkatesh2100');

    toast(
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 text-white"
      >
        🚀 <span>Command copied! Run it in your terminal.</span>
      </motion.div>,
      {
        duration: 3000,
        className: "bg-gray-900 text-white px-4 py-3 rounded-md shadow-md",
      }
    );

    setTimeout(() => {
      router.push('/aboutme');
    }, 3000);
  };

  return (
  <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="animate-shimmer inline-flex py-2 px-5 sm:py-4 md:py-6 sm:px-7 md:px-9 items-center text-2xl justify-center rounded-md border border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium dark:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
    >
      {loading ? "🚀 Running..." : <pre>npx venkatesh2100</pre>}
      <ClipboardCopyIcon className="hover:rotate-12 transition-transform duration-300" />
    </motion.button>
  );
};
2