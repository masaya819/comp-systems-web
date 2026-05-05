import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Comp Systems | AI活用支援コンサルティング",
  description: "年商3〜100億円の中小企業向け。相談から実装・定着まで一気通貫で担うAI活用支援。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
