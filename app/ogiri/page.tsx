"use client";

import { useState, useCallback } from "react";

// export const metadata: Metadata = { ... }  // Can't use in client component
// Metadata is set via generateMetadata or a separate server wrapper.

const QUESTIONS = [
  "もし猫が人間の言葉を話せたら、最初に何と言う？",
  "AIが初めてラーメンを食べた感想は？",
  "宇宙人が地球に来て一番驚いたことは？",
  "タイムマシンで10年後の未来に行ったら、まず何をする？",
  "神様に「好きな能力を1つあげる」と言われたら何を選ぶ？",
  "もし重力が半分になったら、日本人がまずやることは？",
  "「日本一つまらない観光地」を作るとしたら、どんな場所？",
  "動物が選挙に立候補したら、どんな公約を掲げる？",
  "もし睡眠が不要になったら、増えた時間で日本人がすることは？",
  "サンタクロースが実は日本人だったら、どんな人物像？",
];

function getScoreColor(score: number): string {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-yellow-400";
  if (score >= 40) return "text-orange-400";
  return "text-red-400";
}

function getScoreRing(score: number): string {
  if (score >= 80) return "ring-emerald-500/50 shadow-emerald-500/20";
  if (score >= 60) return "ring-yellow-500/50 shadow-yellow-500/20";
  if (score >= 40) return "ring-orange-500/50 shadow-orange-500/20";
  return "ring-red-500/50 shadow-red-500/20";
}

function getScoreLabel(score: number): string {
  if (score >= 90) return "👑 天才！";
  if (score >= 75) return "🤣 最高！";
  if (score >= 60) return "😄 面白い！";
  if (score >= 45) return "😊 なかなか！";
  if (score >= 30) return "😐 惜しい！";
  return "😶 修行が必要…";
}

type Result = {
  score: number;
  comment: string;
};

export default function OgiriPage() {
  const [questionIndex, setQuestionIndex] = useState(
    () => Math.floor(Math.random() * QUESTIONS.length)
  );
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = QUESTIONS[questionIndex];

  const handleNextQuestion = useCallback(() => {
    setQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
    setAnswer("");
    setResult(null);
    setError(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/ogiri", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion, answer: answer.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "エラーが発生しました。");
      } else {
        setResult(data);
      }
    } catch {
      setError("通信エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setResult(null);
    setError(null);
    setAnswer("");
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
          AI Judged
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          大喜利採点
        </h1>
        <p className="text-neutral-400">
          お題に答えて、AIに100点満点で採点してもらおう。
        </p>
      </div>

      {/* Question Card */}
      <div className="mb-8 rounded-2xl border border-indigo-800/50 bg-indigo-950/30 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            お題
          </span>
          <button
            onClick={handleNextQuestion}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            次のお題
          </button>
        </div>
        <p className="text-lg font-medium leading-relaxed text-white">
          {currentQuestion}
        </p>
      </div>

      {/* Result Display */}
      {result && (
        <div className="mb-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
          {/* Score */}
          <div
            className={`mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full ring-4 shadow-lg ${getScoreRing(result.score)}`}
          >
            <div>
              <div
                className={`text-4xl font-bold tabular-nums ${getScoreColor(result.score)}`}
              >
                {result.score}
              </div>
              <div className="text-xs text-neutral-500">/ 100</div>
            </div>
          </div>

          {/* Label */}
          <div className="mb-4 text-xl font-semibold text-white">
            {getScoreLabel(result.score)}
          </div>

          {/* Your Answer */}
          <div className="mb-4 rounded-lg bg-neutral-800/50 px-4 py-3 text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">あなたの回答：</span>{" "}
            {answer}
          </div>

          {/* Comment */}
          <p className="mb-6 text-sm leading-relaxed text-neutral-300">
            💬 {result.comment}
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleRetry}
              className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              もう一度答える
            </button>
            <button
              onClick={handleNextQuestion}
              className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              次のお題へ
            </button>
          </div>
        </div>
      )}

      {/* Answer Form */}
      {!result && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="answer"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              あなたの回答
            </label>
            <textarea
              id="answer"
              rows={4}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="ここに回答を入力してください..."
              disabled={isLoading}
              className="w-full resize-none rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            />
            <div className="mt-1 text-right text-xs text-neutral-600">
              {answer.length} 文字
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-800/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!answer.trim() || isLoading}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                AIが採点中…
              </span>
            ) : (
              "採点する ✨"
            )}
          </button>
        </form>
      )}

      {/* Rules */}
      <div className="mt-12 border-t border-neutral-800 pt-8">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
          採点基準
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "発想の独自性", points: "30点" },
            { label: "ユーモア", points: "30点" },
            { label: "お題との関連性", points: "20点" },
            { label: "言葉のキレ", points: "20点" },
          ].map(({ label, points }) => (
            <div
              key={label}
              className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-center"
            >
              <div className="text-xs font-medium text-neutral-400">{label}</div>
              <div className="text-sm font-semibold text-indigo-400">{points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
