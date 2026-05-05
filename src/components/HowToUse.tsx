import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: '現状をチェックする',
    desc: 'KPI チェックリストで「自院で見えている数字」を 3 段階で確認。優先度の高い領域が浮かびます。',
    img: 'illustrations/steps/step-1-check.jpg',
  },
  {
    n: '02',
    title: '1 週間だけ数字を入力する',
    desc: 'Google スプレッドシート雛形に毎日 5 分で入力。週末に自動集計された週次サマリーで動きを見ます。',
    img: 'illustrations/steps/step-2-input.jpg',
  },
  {
    n: '03',
    title: '優先課題を決める',
    desc: '見えてきた課題から、最初の一手を 1 つだけ決める。アクションリストで担当・期限まで落とします。',
    img: 'illustrations/steps/step-3-prioritize.jpg',
  },
];

export default function HowToUse() {
  return (
    <section className="section bg-paper">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-prose"
        >
          <div className="eyebrow mb-4">How to Use</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            使い方は 3 ステップ
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
            現状把握から優先課題を決めるところまでを、最短で1週間で。
          </p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((s) => (
            <motion.li
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="rounded-card bg-paper-off border border-ink-line overflow-hidden relative"
            >
              <div className="aspect-[4/3] bg-paper overflow-hidden border-b border-ink-line">
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <div className="font-en text-3xl font-bold text-med-500 mb-3">
                  {s.n}
                </div>
                <h3 className="font-bold text-ink text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
