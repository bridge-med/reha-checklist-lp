import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink-line">
      <div className="mx-auto max-w-site px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-en text-lg font-semibold tracking-wider text-ink">
              {config.brand.name}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink-mute mt-1">
              {config.brand.tagline}
            </div>
            <p className="text-sm text-ink-soft mt-3 max-w-md leading-relaxed">
              {config.brand.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href={config.brand.note}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-med-600 transition-colors"
            >
              note
            </a>
            <a
              href={config.brand.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-med-600 transition-colors"
            >
              X
            </a>
            <a
              href={config.brand.bridge}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-med-600 transition-colors"
            >
              BRIDGE
            </a>
            <a
              href={config.brand.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-med-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href={config.brand.mail}
              className="text-ink-soft hover:text-med-600 transition-colors"
            >
              Mail
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ink-line text-xs text-ink-mute">
          © 2026 {config.brand.name}｜{config.brand.tagline}. 配布物の内容のコピーや再配布はお控えください。
        </div>
      </div>
    </footer>
  );
}
