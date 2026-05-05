import { useEffect, useState } from 'react';
import { config } from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-ink-line'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-ink hover:opacity-80 transition-opacity"
        >
          <span className="font-en text-base font-semibold tracking-wider">
            {config.brand.name}
          </span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.18em] text-ink-mute">
            {config.brand.tagline}
          </span>
        </a>
        <a href={config.cta.formUrl} className="btn-primary text-xs sm:text-sm py-2.5 px-5">
          {config.cta.headerLabel}
        </a>
      </div>
    </header>
  );
}
