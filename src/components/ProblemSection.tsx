import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const problems = [
  '予約枠は埋まっているのに、収益が伸びている実感がない',
  'キャンセル率や空き枠の影響が見えていない',
  'PT ごとの稼働差が分からない',
  '新患から初回リハ、継続までの流れが追えていない',
  '物療から運動器リハへの導線が曖昧',
  'リハ部門の数字を院長やスタッフに説明できない',
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemSection() {
  return (
    <section className="section bg-paper relative overflow-hidden">
      {/* 薄いグリッド背景 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(patterns/grid.jpg)',
          backgroundSize: '480px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="section-inner relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          className="max-w-prose"
        >
          <div className="eyebrow mb-4">Problem</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            こんな状態になっていませんか？
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
            リハ部門の運営でよく見かける、
            <span className="font-semibold text-ink">「整理されていないだけ」</span>
            の状況です。手の付け所が分かれば、ほとんどは少しずつ動かせます。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((text) => (
            <motion.div
              key={text}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              className="rounded-card bg-paper-off border border-ink-line p-6 hover:border-med-300 transition-colors"
            >
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={18}
                  className="mt-0.5 flex-none text-med-500"
                  strokeWidth={2}
                />
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
