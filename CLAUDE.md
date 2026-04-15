# Portfolio Site — CLAUDE.md

## Project Overview

Next.js + TypeScript + Tailwind CSS で構築したポートフォリオサイト。

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist (Google Fonts)
- **Package Manager**: npm

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx        # ルートレイアウト（Navigation, Footer を含む）
│   ├── page.tsx          # トップページ（Hero, Tech Stack, Works）
│   ├── about/
│   │   └── page.tsx      # 自己紹介ページ（Profile, Skills, Experience）
│   └── contact/
│       └── page.tsx      # お問い合わせページ（フォーム, 直接連絡先）
├── components/
│   ├── Navigation.tsx    # スティッキーナビゲーションバー（Client Component）
│   └── ContactForm.tsx   # お問い合わせフォーム（Client Component）
└── CLAUDE.md
```

## Pages

| Path | 説明 |
|------|------|
| `/` | トップページ。Hero セクション、Tech Stack、Works を表示 |
| `/about` | 自己紹介、スキルセット、職歴タイムライン |
| `/contact` | お問い合わせフォームと直接連絡先 |

## Development

```bash
npm run dev    # 開発サーバー起動（http://localhost:3000）
npm run build  # プロダクションビルド
npm run lint   # ESLint 実行
```

## Design Guidelines

- カラーテーマ: ダーク（`neutral-950` ベース）
- アクセントカラー: `indigo-400 / indigo-600`
- フォント: Geist Sans
- コンポーネントは `components/` ディレクトリに配置
- Client Component には `"use client"` ディレクティブを先頭に記述

## Notes

- `ContactForm` はモックの送信処理（setTimeout）を使用。実際のバックエンド連携時は API Route または外部サービスに置き換える
- 個人情報（名前、メールアドレス等）はプレースホルダーのため、実際の情報に更新すること
