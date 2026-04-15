import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "お問い合わせフォームページです。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Get in touch
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          お問い合わせ
        </h1>
        <p className="mb-12 text-neutral-400 leading-relaxed">
          お仕事のご依頼・ご相談・その他ご質問がありましたら、お気軽にご連絡ください。
          通常 2 営業日以内にご返信いたします。
        </p>

        <ContactForm />

        {/* Direct contact */}
        <div className="mt-12 border-t border-neutral-800 pt-10">
          <p className="mb-6 text-sm text-neutral-500">または、直接ご連絡いただくこともできます。</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:taro@example.com"
              className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
            >
              <svg
                className="h-4 w-4 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              taro@example.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
            >
              <svg
                className="h-4 w-4 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
