import { motion } from 'framer-motion';
import { ArrowRight, FileText, Table2 } from 'lucide-react';
import { config } from '../config';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-6 sm:px-8"
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
            className="eyebrow mb-6"
          >
            無料配布 · リハ運営者向け
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink"
          >
            リハ部門の数字、
            <br />
            <span className="text-med-600">"売上"だけ</span>見ていませんか？
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-7 text-base md:text-lg leading-relaxed text-ink-soft max-w-2xl"
          >
            外来リハの運営改善に必要な KPI を、現場目線で整理できる無料チェックリスト。
            <br className="hidden md:block" />
            整形外科クリニックの院長・事務長・リハ責任者・PT リーダー向けに、
            「最初に見るべき数字」を1枚にまとめました。
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={config.cta.formUrl} className="btn-primary">
              {config.cta.primaryLabel}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <span className="text-sm text-ink-mute">
              {config.product.teaser}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 text-sm text-ink-mute"
          >
            <span className="inline-flex items-center gap-2">
              <FileText size={16} className="text-med-500" strokeWidth={2} />
              PDF 解説資料
            </span>
            <span className="inline-flex items-center gap-2">
              <Table2 size={16} className="text-teal-500" strokeWidth={2} />
              Google スプレッドシート雛形
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
