import { motion } from 'framer-motion';

const checklistItems = [
  { ok: true,  text: '新患→初回リハ移行率' },
  { ok: true,  text: 'PT 1 人あたり単位数' },
  { ok: false, text: 'キャンセル率と当日埋め戻し率' },
  { ok: false, text: '物療→運動器リハ転換数' },
];

const sheetRows = [
  { d: '月', n: 12, c: 1, u: 38 },
  { d: '火', n:  9, c: 2, u: 35 },
  { d: '水', n: 14, c: 0, u: 42 },
  { d: '木', n: 10, c: 1, u: 36 },
  { d: '金', n: 13, c: 2, u: 40 },
];

const weeklyBars = [
  { label: '新患', val: 62, accent: 'bg-med-500' },
  { label: '実施',  val: 88, accent: 'bg-med-600' },
  { label: '稼働',  val: 74, accent: 'bg-teal-500' },
  { label: 'C/R',  val: 28, accent: 'bg-med-300' },
];

const dashboardTiles = [
  { label: '昨日 単位', value: '186', diff: '+12' },
  { label: '今週 累計', value: '742', diff: '+5%' },
  { label: '空き枠',   value: '14',  diff: '残' },
  { label: '埋め戻し', value: '83%', diff: '↑' },
];

const actions = [
  { p: '高', text: '火曜の空き枠 3 件を物療継続から埋め戻し' },
  { p: '中', text: '新患→初回リハまでのリードタイムを記録' },
  { p: '低', text: '計画書の同意取り直しタイミングを統一' },
];

const cards = [
  {
    name: 'KPI チェックリスト',
    desc: '見えている数字を 3 段階で確認するリスト',
    body: (
      <div className="space-y-2.5">
        {checklistItems.map((it) => (
          <div key={it.text} className="flex items-start gap-2">
            <span
              className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded ${
                it.ok ? 'bg-med-600 text-white' : 'border border-ink-line bg-paper'
              }`}
            >
              {it.ok && (
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                  <path d="M3 8l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className={`text-[11px] leading-snug ${it.ok ? 'text-ink-mute' : 'text-ink-soft font-medium'}`}>
              {it.text}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: '日別 KPI 入力シート',
    desc: '1日5分以内で入れられる項目構成',
    body: (
      <div className="overflow-hidden rounded border border-ink-line">
        <div className="grid grid-cols-4 bg-med-50 text-[9px] font-semibold uppercase tracking-wider text-med-700">
          <div className="px-2 py-1">日</div>
          <div className="px-2 py-1 text-right">新患</div>
          <div className="px-2 py-1 text-right">C</div>
          <div className="px-2 py-1 text-right">単位</div>
        </div>
        {sheetRows.map((r) => (
          <div key={r.d} className="grid grid-cols-4 border-t border-ink-line text-[10px] tabular-nums">
            <div className="px-2 py-1 font-medium text-ink-soft">{r.d}</div>
            <div className="px-2 py-1 text-right text-ink">{r.n}</div>
            <div className="px-2 py-1 text-right text-ink-mute">{r.c}</div>
            <div className="px-2 py-1 text-right text-ink">{r.u}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: '週次サマリー',
    desc: '日次から自動集計、移行率・C/R も',
    body: (
      <div className="space-y-2.5">
        {weeklyBars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-[10px] tabular-nums text-ink-mute mb-1">
              <span>{b.label}</span>
              <span className="font-semibold text-ink">{b.val}%</span>
            </div>
            <div className="h-2 rounded-full bg-paper-off overflow-hidden">
              <div className={`h-full ${b.accent}`} style={{ width: `${b.val}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: '朝礼用ミニダッシュボード',
    desc: '1枚で全員が同じ数字を見る',
    body: (
      <div className="grid grid-cols-2 gap-2">
        {dashboardTiles.map((t) => (
          <div key={t.label} className="rounded border border-ink-line bg-paper p-2">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-ink-mute">
              {t.label}
            </div>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-base font-bold tabular-nums text-ink">{t.value}</span>
              <span className="text-[10px] text-teal-600 tabular-nums">{t.diff}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: '改善アクションリスト',
    desc: '担当・期限まで落とすシート',
    body: (
      <div className="space-y-2">
        {actions.map((a) => (
          <div key={a.text} className="flex items-start gap-2">
            <span
              className={`mt-0.5 flex-none rounded px-1.5 py-0.5 text-[8px] font-bold ${
                a.p === '高'
                  ? 'bg-med-600 text-white'
                  : a.p === '中'
                  ? 'bg-teal-100 text-teal-700'
                  : 'bg-paper-off text-ink-mute border border-ink-line'
              }`}
            >
              {a.p}
            </span>
            <span className="text-[11px] leading-snug text-ink-soft">{a.text}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Preview() {
  return (
    <section className="section bg-paper relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url(patterns/diagonal.jpg)',
          backgroundSize: '420px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-prose"
        >
          <div className="eyebrow mb-4">Preview</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            届くものは、こんなイメージです
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
            PDF と Google スプレッドシート雛形に、それぞれ以下のような形で入っています。記入欄と数式は揃えてあるので、コピーしてその日に動かせます。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="rounded-card bg-paper-off border border-ink-line p-5 shadow-card hover:shadow-soft hover:border-med-300 transition-all"
            >
              <div className="rounded border border-ink-line bg-paper p-4 min-h-[160px]">
                {c.body}
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-ink text-[15px]">{c.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-mute">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-xs text-ink-mute leading-relaxed max-w-prose">
          ※ 上記は完成イメージのサンプルです。実物の PDF は A4 ・ Google スプレッドシート雛形は 7 シート構成でお届けします。
        </p>
      </div>
    </section>
  );
}
