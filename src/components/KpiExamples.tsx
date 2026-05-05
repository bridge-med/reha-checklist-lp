import { motion } from 'framer-motion';

const kpis = [
  '新患数',
  'リハ処方数',
  '初回リハ実施数',
  '新患→初回リハ移行率',
  '継続率',
  'キャンセル数',
  'キャンセル率',
  '当日埋め戻し率',
  '実施単位数',
  'PT 別実施単位数',
  '予約枠稼働率',
  '空き枠数',
  'PT 1 人あたり単位数',
  '計画書件数',
  '物療→運動器リハ転換数',
  '運動器リハ終了後の物療継続数',
  '150日上限に近い患者数',
  '終了患者数',
];

export default function KpiExamples() {
  return (
    <section className="section bg-paper-off relative overflow-hidden">
      {/* network 装飾を上端に薄く */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-0 right-0 opacity-25"
      >
        <img
          src="decoration/network.jpg"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-prose"
        >
          <div className="eyebrow mb-4">KPI Examples</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            含まれる KPI（一部）
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
            扱う KPI は 18 個。新患の流れ、枠とキャンセル、PT 別実施量、計画書、物療と運動器リハの行き来、終了判断まで。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {kpis.map((kpi) => (
            <motion.span
              key={kpi}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center rounded-full border border-med-200 bg-paper px-4 py-2 text-sm font-medium text-med-700 shadow-card"
            >
              {kpi}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
