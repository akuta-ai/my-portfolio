import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-65px-73px)] flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Frontend Engineer
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Yamada Taro
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-400">
            React・Next.js を中心としたフロントエンド開発が得意です。
            使いやすく、美しいプロダクトを作ることが好きです。
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/about"
              className="rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-700 px-8 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-neutral-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="border-t border-neutral-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Recent Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce App",
                description:
                  "Next.js と Stripe を使ったフルスタック EC サイト。",
                tags: ["Next.js", "Stripe", "PostgreSQL"],
              },
              {
                title: "Dashboard UI",
                description:
                  "リアルタイムデータを可視化する管理画面ダッシュボード。",
                tags: ["React", "Recharts", "TailwindCSS"],
              },
              {
                title: "Portfolio Site",
                description:
                  "このサイト自体。Next.js + Tailwind CSS で構築。",
                tags: ["Next.js", "TypeScript", "TailwindCSS"],
              },
            ].map((work) => (
              <article
                key={work.title}
                className="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-800/50"
              >
                <h3 className="mb-2 text-base font-semibold text-white group-hover:text-indigo-300">
                  {work.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
