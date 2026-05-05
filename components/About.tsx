const stats = [
  { num: "20社", label: "2年間の新規成約数（同期平均8社）" },
  { num: "100%", label: "直近1年・8案件の契約継続率（業界平均60%）" },
  { num: "3年", label: "中小企業オーナーへの伴走型営業実務" },
];

export default function About() {
  return (
    <section id="about" className="py-40 px-6 bg-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
          About
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
          代表について
        </h2>

        <div className="grid sm:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl font-semibold mb-1">（要記入）</p>
            <p className="text-sm text-white/50 mb-8">代表 / Comp Systems</p>
            <div className="space-y-5 text-white/65 font-light leading-relaxed text-sm">
              <p>
                前職では3年間、年商3〜100億円規模の中堅・中小企業を対象に、新規顧客開拓・経営課題の分析・ソリューション提案・プロジェクト伴走を一気通貫で担当。
              </p>
              <p>
                AI活用により自身の業務を効率化し、そのノウハウを300名超の事業部員に展開した経験を持つ。「売れる営業力」と「AIで仕組みを作る実装力」を兼ね備え、Comp Systemsを創業。
              </p>
              <p>
                「やり切る」をブランドに、相談から定着まで一人が責任を持って担う支援スタイルを貫く。
              </p>
            </div>
          </div>

          <div className="space-y-px">
            {stats.map((s) => (
              <div
                key={s.num}
                className="flex items-baseline gap-6 py-8 border-t border-white/20"
              >
                <span className="text-4xl font-semibold flex-none">{s.num}</span>
                <span className="text-sm text-white/60 font-light">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
