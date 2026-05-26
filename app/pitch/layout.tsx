import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIを活用した経営革新のご提案",
  description: "AI活用が経営に必須な理由と、Comp Systemsが中小企業の経営革新をどう支援するかをご説明します。",
  robots: { index: false, follow: false },
};

export default function PitchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
