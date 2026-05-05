/**
 * LP 内のリンクとブランド情報の一元管理。
 *
 * - 配布の Google フォーム URL が確定したら、cta.formUrl を差し替える。
 *   現状は #download にスクロールするだけ。
 * - メールや note 等の URL は brand 配下を変更すれば他箇所にも反映される。
 */

export const config = {
  brand: {
    name: 'Wataru Note',
    tagline: 'PT Research & Management',
    description: '理学療法士 × 医療経営支援。臨床と経営を行き来する立場で発信。',
    note: 'https://note.com/prime_duck4944',
    x: 'https://x.com/WataruPT1013',
    github: 'https://github.com/bridge-med',
    bridge: 'https://bridge-med.github.io/bridge-lp/',
    mail: 'mailto:h.w19961013@gmail.com',
  },
  product: {
    title: 'リハ部門の数字が見えない時に見るチェックリスト',
    subtitle: '整形外科クリニック向け 外来リハ KPI 見える化スターターキット',
    teaser: 'PDF・スプレッドシート雛形つき',
  },
  cta: {
    /**
     * 配布フォーム URL。Header / Hero / Download セクションの全 CTA がここから配線される。
     * 差し替える場合は viewform までを必須に、ouid 等の個人パラメタは外す。
     */
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYUgG_gRt3Y3slGhFD7R2HeJ9pBl1umptI4sk4h1AWOEmgJw/viewform',
    primaryLabel: '無料でチェックリストを受け取る',
    headerLabel: '無料で受け取る',
  },
} as const;

export type Config = typeof config;
