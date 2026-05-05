import { motion } from 'framer-motion';
import { config } from '../config';

const stages = [
  { num: '01', tag: 'Clinical', title: '臨床', body: '理学療法士として現場に立ち、患者の動線を体に染み込ませた日々。' },
  { num: '02', tag: 'Research', title: '研究', body: '大学院で「評価の客観性」と向き合い、英語論文を発表。' },
  { num: '03', tag: 'Management', title: '経営', body: '事業会社で医療経営コンサル。PMI / Value-Up の数字に責任を持つ立場。' },
  { num: '04', tag: 'Builder', title: '道具づくり', body: '臨床 × 研究 × 経営 の交差点で、現場が嫌がらない数字運用と道具を作る。', now: true },
];

export default function Profile() {
  return (
    <section className="section bg-paper-sand relative overflow-hidden">
      {/* 右上に rings 装飾 */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[420px] max-w-[40%] opacity-30 hidden md:block"
      >
        <img src="decoration/rings.jpg" alt="" className="w-full h-auto" />
      </div>
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-prose"
        >
          <div className="eyebrow mb-4">Profile</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink leading-snug">
            現場と経営のあいだで、
            <br />
            <span className="text-med-600">道具を作る</span>
          </h2>
          <div className="mt-5 flex flex-wrap items-baseline gap-3">
            <span className="font-bold text-ink text-lg">橋本 渉</span>
            <span className="font-en italic text-ink-mute text-sm">Wataru Hashimoto</span>
            <span className="ml-1 inline-flex items-center rounded-full border border-med-200 bg-med-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-med-700">
              PT × Consultant × Builder
            </span>
          </div>
          <p className="mt-7 text-base md:text-lg leading-loose text-ink-soft">
            理学療法士として臨床現場を経験し、大学院で評価の客観性と向き合い、いまは事業会社で医療経営の支援に関わっています。外来リハの導入支援、リハ部門の KPI 管理、予約・実績管理のダッシュボード設計、AI / スプレッドシートを使った業務改善が日々の仕事です。
            <span className="font-semibold text-ink">「臨床 × 研究 × 経営」</span>
            を一人で繋ぐ立場が、本書の出発点になっています。
          </p>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-ink-mute">
            「現場の努力が足りない」ではなく「見るべき数字が整理されていないだけ」という前提で、現場が嫌がらない形の数字運用を作ることを大切にしています。
          </p>
        </motion.div>

        {/* タイムライン: 臨床 → 研究 → 経営 → 道具づくり */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {stages.map((s) => (
            <motion.li
              key={s.num}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className={`relative rounded-card border p-5 ${
                s.now
                  ? 'bg-paper border-teal-300 shadow-card'
                  : 'bg-paper border-ink-line'
              }`}
            >
              {s.now && (
                <span className="absolute -top-2 left-5 rounded bg-teal-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                  Now
                </span>
              )}
              <div className="font-en text-2xl font-bold italic text-med-500 leading-none">
                {s.num}
              </div>
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                {s.tag}
              </div>
              <div className="mt-1 font-bold text-ink">{s.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        {/* 資格・タグと Wataru Note / BRIDGE への動線 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-prose"
        >
          <div className="flex flex-wrap items-center gap-2">
            {['理学療法士', '医科学修士', '医療経営コンサル', '診療情報管理士(学習中)'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-ink-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-ink-line bg-paper p-5 text-sm leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">{config.brand.name}</span>{' '}
            (note) で、リハ部門マネジメント・医療現場の業務改善・AI / スプレッドシート活用について書いています。
            自分用に作った道具は別ブランド{' '}
            <a
              href={config.brand.bridge}
              target="_blank"
              rel="noopener noreferrer"
              className="text-med-600 hover:text-med-700 underline-offset-4 hover:underline"
            >
              BRIDGE
            </a>{' '}
            にまとめています。
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <a
                href={config.brand.note}
                target="_blank"
                rel="noopener noreferrer"
                className="text-med-600 hover:text-med-700"
              >
                note →
              </a>
              <a
                href={config.brand.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-med-600 hover:text-med-700"
              >
                X →
              </a>
              <a
                href={config.brand.bridge}
                target="_blank"
                rel="noopener noreferrer"
                className="text-med-600 hover:text-med-700"
              >
                BRIDGE →
              </a>
              <a
                href={config.brand.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-med-600 hover:text-med-700"
              >
                GitHub →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
