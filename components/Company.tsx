const info = [
  { label: "屋号", value: "Comp Systems" },
  { label: "代表者", value: "尾﨑 将也（Masaya Ozaki）" },
  { label: "設立", value: "2026年5月" },
  { label: "事業内容", value: "AI活用支援コンサルティング" },
  { label: "対応エリア", value: "全国（オンライン）/ 大阪近郊は訪問対応可" },
  { label: "お問い合わせ", value: "masaya980819@gmail.com" },
];


export default function Company() {
  return (
    <section id="company" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
          Company
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
          会社概要
        </h2>

        {/* 会社情報テーブル */}
        <div className="max-w-2xl mb-32">
          {info.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row gap-2 sm:gap-12 py-6 border-t border-white/20"
            >
              <span className="flex-none w-32 text-sm text-white/50 font-light">
                {item.label}
              </span>
              <span className="text-sm text-white/90">{item.value}</span>
            </div>
          ))}
        </div>

        {/* 代表プロフィール */}
        <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-12">
          代表プロフィール
        </p>
        <div className="max-w-2xl">
          <p className="text-xl font-semibold mb-1">尾﨑 将也</p>
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
      </div>
    </section>
  );
}
