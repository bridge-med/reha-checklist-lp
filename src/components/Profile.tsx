import { motion } from 'framer-motion';
import { config } from '../config';

export default function Profile() {
  return (
    <section className="section bg-paper-sand">
      <div className="section-inner max-w-prose">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="eyebrow mb-4">Profile</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            書いている人
          </h2>
          <p className="mt-6 text-base md:text-lg leading-loose text-ink-soft">
            理学療法士として臨床現場を経験し、現在は医療・クリニック経営支援の現場で、リハ部門の KPI 管理、外来リハ導入、AI・スプレッドシートを活用した業務改善に取り組んでいます。
          </p>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-ink-mute">
            「現場の努力が足りない」ではなく「見るべき数字が整理されていないだけ」という前提で、現場が嫌がらない形の数字運用を作ることを大切にしています。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-ink-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft">
              理学療法士
            </span>
            <span className="inline-flex items-center rounded-full border border-ink-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft">
              医科学修士
            </span>
            <span className="inline-flex items-center rounded-full border border-ink-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft">
              医療経営コンサル
            </span>
          </div>
          <div className="mt-8 text-sm text-ink-mute">
            <a
              href={config.brand.note}
              target="_blank"
              rel="noopener noreferrer"
              className="text-med-600 hover:text-med-700 underline-offset-4 hover:underline"
            >
              {config.brand.name}
            </a>{' '}
            で、リハ部門マネジメント・医療現場の業務改善・AI / スプレッドシート活用について書いています。
          </div>
        </motion.div>
      </div>
    </section>
  );
}
