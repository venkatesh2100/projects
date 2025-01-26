'use client';
import { ClipboardCopyIcon } from 'lucide-react';
import { toast } from 'sonner';

export const HeroBtn = () => {
  const handleHover = () => {
    navigator.clipboard.writeText('npx venkatesh2100');
    toast('Text has been copied', {
      description: "You have copied the command successfully.",
    });
  };

  return (
    <>
      {/* Toaster for toast notifications */}

      {/* Link wrapping the button */}
      <a href="/aboutme">
        <button
          onClick={handleHover}
          className="inline-flex py-2 px-5 sm:py-4 md:py-6 sm:px-7 md:px-9 animate-shimmer items-center text-2xl justify-center rounded-md border border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
        >
          <pre>npx venkatesh2100</pre>
          <ClipboardCopyIcon className="hover:rotate-12 transition-transform duration-300" />
        </button>
      </a>
    </>
  );
};
