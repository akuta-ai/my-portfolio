import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "自己紹介・経歴・スキルセットのページです。",
};

const skills = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code", "Docker"],
  },
];

const experiences = [
  {
    period: "2023 – 現在",
    role: "フロントエンドエンジニア",
    company: "株式会社〇〇",
    description:
      "Next.js を使ったプロダクト開発をリード。デザインシステムの整備や、パフォーマンス改善にも取り組む。",
  },
  {
    period: "2021 – 2023",
    role: "Web エンジニア",
    company: "株式会社△△",
    description:
      "React + TypeScript での SPA 開発。バックエンドは Node.js / Express を使用。",
  },
  {
    period: "2019 – 2021",
    role: "フロントエンドエンジニア（新卒）",
    company: "株式会社□□",
    description:
      "HTML / CSS / JavaScript を用いた Web サイト制作・コーディングを担当。",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Profile */}
      <section className="mb-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
          About Me
        </p>
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
          自己紹介
        </h1>
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0">
            <div className="h-40 w-40 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-5xl select-none">
              👤
            </div>
          </div>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              はじめまして、山田 太郎です。東京を拠点に活動するフロントエンドエンジニアです。
              React / Next.js を中心としたモダンな Web 開発を得意としており、
              ユーザー体験を大切にした設計・実装を心がけています。
            </p>
            <p>
              UI/UX への関心が高く、デザインと実装の橋渡しをするポジションでの仕事が好きです。
              コードの品質にこだわりを持ちつつ、チームと協力して良いプロダクトを作ることにやりがいを感じています。
            </p>
            <p>
              趣味はカメラとハイキング。休日はよく自然の中へ出かけ、写真を撮っています。
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold text-white">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="mb-8 text-2xl font-semibold text-white">Experience</h2>
        <div className="relative space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-800 mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="pb-10">
                <p className="mb-1 text-xs font-medium text-neutral-500">{exp.period}</p>
                <h3 className="mb-0.5 text-base font-semibold text-white">{exp.role}</h3>
                <p className="mb-2 text-sm font-medium text-indigo-400">{exp.company}</p>
                <p className="text-sm leading-relaxed text-neutral-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
