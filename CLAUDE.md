# Portfolio Site — CLAUDE.md

## Project Overview

Next.js + TypeScript + Tailwind CSS で構築したポートフォリオサイト。大喜利採点ページでは Anthropic Claude API を利用。

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist (Google Fonts)
- **AI**: Anthropic Claude API (`@anthropic-ai/sdk`)
- **Package Manager**: npm

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx            # ルートレイアウト（Navigation, Footer を含む）
│   ├── page.tsx              # トップページ（Hero, Tech Stack, Works）
│   ├── about/
│   │   └── page.tsx          # 自己紹介ページ（Profile, Skills, Experience）
│   ├── contact/
│   │   └── page.tsx          # お問い合わせページ（フォーム, 直接連絡先）
│   ├── ogiri/
│   │   ├── layout.tsx        # 大喜利ページのメタデータ設定
│   │   └── page.tsx          # 大喜利採点ページ（Client Component）
│   └── api/
│       └── ogiri/
│           └── route.ts      # 大喜利採点 API（Claude API を呼び出す）
├── components/
│   ├── Navigation.tsx        # スティッキーナビゲーションバー（Client Component）
│   └── ContactForm.tsx       # お問い合わせフォーム（Client Component）
├── .env.local.example        # 環境変数のサンプル
└── CLAUDE.md
```

## Pages

| Path | 説明 |
|------|------|
| `/` | トップページ。Hero セクション、Tech Stack、Works を表示 |
| `/about` | 自己紹介、スキルセット、職歴タイムライン |
| `/ogiri` | 大喜利採点。固定お題に回答し Claude API で採点 |
| `/contact` | お問い合わせフォームと直接連絡先 |

## Development

```bash
cp .env.local.example .env.local  # 環境変数を設定
# ANTHROPIC_API_KEY を .env.local に記入

npm run dev    # 開発サーバー起動（http://localhost:3000）
npm run build  # プロダクションビルド
npm run lint   # ESLint 実行
```

## Environment Variables

| 変数名 | 用途 |
|--------|------|
| `ANTHROPIC_API_KEY` | Anthropic Claude API キー（大喜利採点に必要） |

## Design Guidelines

- カラーテーマ: ダーク（`neutral-950` ベース）
- アクセントカラー: `indigo-400 / indigo-600`
- フォント: Geist Sans
- コンポーネントは `components/` ディレクトリに配置
- Client Component には `"use client"` ディレクティブを先頭に記述
- API Route はサーバーサイドのみで機密情報（APIキー）を扱う

## Claude API Integration

- `app/api/ogiri/route.ts` が `/api/ogiri` POST エンドポイントを提供
- `claude-opus-4-6` モデルを使用して大喜利回答を採点
- JSON フォーマット（score + comment）でレスポンスを返す
- 採点基準：発想の独自性 30点、ユーモア 30点、お題との関連性 20点、言葉のキレ 20点

## Notes

- `ContactForm` はモックの送信処理（setTimeout）を使用。実際のバックエンド連携時は API Route または外部サービスに置き換える
- 個人情報（名前、メールアドレス等）はプレースホルダーのため、実際の情報に更新すること
- `.env.local` は `.gitignore` に含まれており、リポジトリにコミットされない
