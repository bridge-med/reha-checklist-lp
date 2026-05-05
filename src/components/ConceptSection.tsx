import { motion } from 'framer-motion';

export default function ConceptSection() {
  return (
    <section className="section bg-paper-off">
      <div className="section-inner grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="eyebrow mb-4">Concept</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-ink">
            見るべきは
            <br />
            <span className="text-med-600">「患者の流れ」</span>
            と
            <br />
            <span className="text-teal-500">「枠の使われ方」</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <p className="text-base md:text-lg leading-loose text-ink-soft">
            リハ部門の改善は、売上だけを見ても始まりません。新患がリハにつながっているか、予約枠がどう使われているか、キャンセルがどこで起きているか。
          </p>
          <p className="mt-6 text-base md:text-lg leading-loose text-ink-soft">
            患者の流れと枠の使われ方を整理することで、改善すべきポイントが見えやすくなります。
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-card bg-paper border border-ink-line overflow-hidden">
              <div className="aspect-[4/3] bg-paper-off overflow-hidden">
                <img
                  src="illustrations/concept/flow.jpg"
                  alt="患者の流れ:新患→処方→初回→継続→終了"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-med-600 mb-2">
                  Flow
                </div>
                <div className="font-bold text-ink">患者の流れ</div>
                <p className="mt-2 text-sm text-ink-mute leading-relaxed">
                  新患 → 処方 → 初回 → 継続 → 終了。どこで切れているかを追う
                </p>
              </div>
            </div>
            <div className="rounded-card bg-paper border border-ink-line overflow-hidden">
              <div className="aspect-[4/3] bg-paper-off overflow-hidden">
                <img
                  src="illustrations/concept/capacity.jpg"
                  alt="枠の使われ方:総枠 / 実施数 / 空き / キャンセル / 埋め戻し"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-500 mb-2">
                  Capacity
                </div>
                <div className="font-bold text-ink">枠の使われ方</div>
                <p className="mt-2 text-sm text-ink-mute leading-relaxed">
                  総枠 / 実施数 / 空き / キャンセル / 埋め戻し で見る
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
