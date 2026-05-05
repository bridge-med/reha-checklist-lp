import { motion } from 'framer-motion';
import {
  CheckSquare,
  Calendar,
  BarChart3,
  ListTodo,
  LayoutDashboard,
  BookOpen,
} from 'lucide-react';

const items = [
  {
    icon: CheckSquare,
    name: 'KPI チェックリスト',
    desc: '自院で何が見えているか・何が見えていないかを 3 段階で確認するリスト。優先度の起点になります。',
  },
  {
    icon: Calendar,
    name: '日別 KPI 入力シート',
    desc: '1 日 5 分以内で入れられるよう項目を絞った、Google スプレッドシート形式の入力欄。',
  },
  {
    icon: BarChart3,
    name: '週次サマリー',
    desc: '日次の入力から自動集計される週合計・移行率・キャンセル率・PT 1 人あたり単位数。',
  },
  {
    icon: ListTodo,
    name: '改善アクションリスト',
    desc: '気づいた課題を、仮説 → 対応策 → 担当 → 期限まで落とすシート。同時に 3 つまでが目安。',
  },
  {
    icon: LayoutDashboard,
    name: '朝礼用ミニダッシュボード',
    desc: '昨日の実施単位、今週累計、空き枠、今日の重点アクション。1 枚で全員が同じ数字を見ます。',
  },
  {
    icon: BookOpen,
    name: 'KPI 定義集',
    desc: '18 個の KPI について、定義・計算式・注意点・関連 KPI をまとめた辞書。新人 PT が入った時にも開けます。',
  },
];

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function ContentsSection() {
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
          <div className="eyebrow mb-4">Contents</div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            無料チェックリストに含まれるもの
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
            PDF の解説 と Google スプレッドシート雛形がセットになっています。
            読んだその日にコピーして、月曜から動かせる粒度に揃えました。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={card}
              transition={{ duration: 0.4 }}
              className="rounded-card bg-paper-off border border-ink-line p-6 shadow-card hover:shadow-soft hover:border-med-300 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-med-50 text-med-600 mb-4">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-ink mb-2">{name}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
