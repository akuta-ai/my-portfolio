"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-800/50 bg-green-950/30 p-8 text-center">
        <div className="mb-3 text-3xl">✓</div>
        <h3 className="mb-2 text-lg font-semibold text-green-400">送信が完了しました</h3>
        <p className="text-sm text-neutral-400">
          お問い合わせありがとうございます。2 営業日以内にご返信いたします。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-indigo-400 underline-offset-2 hover:underline"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="山田 太郎"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="taro@example.com"
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
          メッセージ <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="ご用件をお書きください..."
          className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
