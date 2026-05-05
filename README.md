# reha-checklist-lp

「リハ部門の数字が見えない時に見るチェックリスト」無料配布用 LP。

- React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + lucide-react
- 単一ページ。10 セクション構成
- BtoB / 医療系のモダン路線（メディカルブルー + 淡ティール）

## ローカル起動

```sh
npm install
npm run dev      # http://localhost:5173
npm run typecheck
npm run build    # dist/ に静的アセットが出力
npm run preview  # build した成果物のローカル確認
```

## CTA リンクの差し替え

LP 内の「無料で受け取る」「無料でチェックリストを受け取る」ボタンの遷移先は、**`src/config.ts`** で一元管理しています。

```ts
// src/config.ts
export const config = {
  // ...
  cta: {
    formUrl: '#download',          // ← Google フォーム URL に差し替え
    primaryLabel: '無料でチェックリストを受け取る',
    headerLabel: '無料で受け取る',
  },
};
```

`formUrl` を Google フォームの URL（例: `https://docs.google.com/forms/d/e/.../viewform`）に変更すれば、ヘッダ・Hero・Download セクション全部が連動して切り替わります。

ブランド名やSNSリンクも同ファイルの `config.brand` 配下を編集すれば全体に反映されます。

## ディレクトリ構成

```
lp/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css           ... Tailwind と共通コンポーネント class
│   ├── config.ts           ... CTA URL / ブランド情報の一元管理
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── ProblemSection.tsx
│       ├── ConceptSection.tsx
│       ├── ContentsSection.tsx
│       ├── KpiExamples.tsx
│       ├── HowToUse.tsx
│       ├── Profile.tsx
│       ├── DownloadSection.tsx
│       └── Footer.tsx
└── README.md
```

## デザイントークン

`tailwind.config.js` の `theme.extend.colors` で定義しています。

- `med-*` … メディカルブルー（メイン）。`med-500: #2B6CB0`
- `teal-*` … 淡いティール（補助）
- `ink-*` … 文字（ベースは `ink: #1A2233`）
- `paper-*` … 背景（off / sand）

## デプロイ

`npm run build` で `dist/` が出力されます。GitHub Pages, Netlify, Vercel 等にそのまま配置可能。

GitHub Pages のサブパス配下にデプロイする場合は、`vite.config.ts` の `base` を該当パスに設定してください（現状は `'./'` で相対パス）。

## 技術メモ

- スクロール時のフェードインは Framer Motion の `whileInView` を使用。`viewport: { once: true }` で初回スクロール時にだけ発火
- アイコンは lucide-react から最小限のものだけ採用
- 全文 ですます調 / 営業感を抑える / 売り込みすぎない、というトーンを統一
- `npm run build` は `tsc -b && vite build`。型エラーがあるとビルドが落ちるので注意

## 今後の差し替え予定

| 項目 | 現状 | 差し替え時に変更する場所 |
|---|---|---|
| Google フォーム URL | `#download` | `src/config.ts` の `cta.formUrl` |
| og:image | 未設定 | `index.html` の `<meta property="og:image">` を追加 |
| ファビコン | 未設定 | `index.html` に `<link rel="icon">` を追加 |
| GA / アクセス解析 | 未設定 | `index.html` 末尾にトラッキングタグを追加 |
