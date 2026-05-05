import { motion } from 'framer-motion';
import { ArrowRight, FileText, Table2 } from 'lucide-react';
import { config } from '../config';

export default function DownloadSection() {
  return (
    <section id="download" className="section bg-med-700 text-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(50% 60% at 70% 0%, rgba(82,178,178,0.18) 0%, transparent 70%)',
        }}
      />
      <div className="section-inner relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200 mb-5">
            Download
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug">
            まずは、リハ部門の数字を
            <br />
            <span className="text-teal-200">"見える化"する</span>
            ところから始めてみませんか？
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-med-100">
            PDF とスプレッドシート雛形を、お手元のメールにお送りします。
            自院に合わせて調整して、まず1週間だけ試してみてください。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={config.cta.formUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-med-700 shadow-soft transition-all hover:-translate-y-0.5"
            >
              {config.cta.primaryLabel}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <span className="text-sm text-med-100">
              所要時間 1 分（メールアドレスのみ）
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="rounded-card border border-white/15 bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-2 text-teal-200 text-xs font-semibold tracking-wider uppercase mb-2">
                <FileText size={14} strokeWidth={2.2} />
                PDF
              </div>
              <div className="font-bold text-white">
                チェックリスト本編
              </div>
              <div className="text-sm text-med-100 mt-1">
                A4 / 12〜15 ページ
              </div>
            </div>
            <div className="rounded-card border border-white/15 bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-2 text-teal-200 text-xs font-semibold tracking-wider uppercase mb-2">
                <Table2 size={14} strokeWidth={2.2} />
                Sheet
              </div>
              <div className="font-bold text-white">
                Google スプレッドシート雛形
              </div>
              <div className="text-sm text-med-100 mt-1">
                7 シート / コピーで即利用
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-med-200 max-w-xl">
            ※ 本書は、リハ部門の運営状況の把握を補助する資料です。診療報酬上の判断や算定要件の充足については、各クリニックの責任のもと、公式情報および所管行政・関係機関のガイダンスに基づいてご判断ください。
            <br />
            ※ メールアドレスは配信用途のみで使用します。第三者提供はしません。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
