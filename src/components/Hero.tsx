import { motion } from 'framer-motion';
import { ArrowRight, FileText, Table2 } from 'lucide-react';
import { config } from '../config';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const personas = [
  '整形外科クリニック院長',
  '事務長',
  'リハ責任者',
  'PT リーダー',
  '外来リハ導入を検討中',
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 px-5 sm:px-8"
    >
      {/* 背景の柔らかいグラデ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(60% 50% at 30% 0%, rgba(43,108,176,0.08) 0%, transparent 70%), radial-gradient(50% 40% at 80% 30%, rgba(82,178,178,0.07) 0%, transparent 70%)',
        }}
      />
      {/* dots パターンを薄く敷く */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage: 'url(patterns/dots.jpg)',
          backgroundSize: '320px',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* 右側に Hero イラスト（PCで画面外にはみ出ないよう調整） */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 -z-10 hidden md:block w-[58%] max-w-[820px] opacity-60"
      >
        <img
          src="illustrations/hero/hero-laptop.jpg"
          alt=""
          className="w-full h-auto"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 35%, black 100%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-site relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            無料配布 · リハ運営者向け
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-[28px] sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink"
          >
            リハ部門の数字、
            <br />
            <span className="text-med-600">"売上"だけ</span>見ていませんか？
          </motion.h1>

          {/* 痛みを示す一文 */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-5 text-[15px] md:text-base leading-relaxed text-ink-soft max-w-2xl"
          >
            忙しい毎日の中で、リハ部門の改善ポイントが見えづらい。
            <br className="hidden sm:block" />
            その原因は売上ではなく、
            <span className="font-semibold text-ink">「患者の流れ」と「枠の使われ方」</span>
            を見ていないことかもしれません。
          </motion.p>

          {/* 対象者 chip */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-7 flex flex-wrap gap-1.5"
          >
            {personas.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-med-200 bg-med-50 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-med-700"
              >
                {p}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-7 text-sm md:text-base leading-relaxed text-ink-soft max-w-2xl"
          >
            外来リハの運営改善に必要な KPI を、現場目線で整理できる無料チェックリスト。
            「最初に見るべき数字」を1枚にまとめました。
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
          >
            <a href={config.cta.formUrl} className="btn-primary justify-center sm:justify-start">
              {config.cta.primaryLabel}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <span className="text-xs sm:text-sm text-ink-mute">
              {config.product.teaser}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-ink-mute"
          >
            <span className="inline-flex items-center gap-2">
              <FileText size={15} className="text-med-500" strokeWidth={2} />
              PDF 解説資料
            </span>
            <span className="inline-flex items-center gap-2">
              <Table2 size={15} className="text-teal-500" strokeWidth={2} />
              Google スプレッドシート雛形
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
