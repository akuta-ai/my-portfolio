import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大喜利採点",
  description: "お題に答えて、AIに100点満点で採点してもらおう。",
};

export default function OgiriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
