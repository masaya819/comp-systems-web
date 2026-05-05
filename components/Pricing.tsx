const plans = [
  {
    name: "Light",
    price: "20",
    desc: "まずAI活用を動かしたい企業向け。スポット相談・ツール選定・基本設計を中心に支援。",
    features: ["月次オンラインMTG", "AIツール選定・設計", "チャット相談対応", "月次レポート"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "30",
    desc: "実装・定着まで伴走したい企業向け。業務への組み込みと現場定着まで責任を持つ。",
    features: ["月次オンラインMTG", "AIツール設計・実装", "現場定着支援", "チャット相談対応", "月次レポート"],
    highlight: true,
  },
  {
    name: "COO",
    price: "50",
    desc: "AI活用の専任担当が必要な企業向け。経営課題の整理から意思決定支援まで幅広く担う。",
    features: ["週次MTG・随時相談", "経営課題の構造化", "AIロードマップ設計", "実装・定着・組織化", "経営判断サポート"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-white/30 uppercase mb-6">
          Pricing
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
          シンプルな料金体系。
        </h2>
        <p className="text-lg text-white/40 font-light mb-24">
          全プラン共通：導入費 ¥150,000（税別）/ 最低契約4ヶ月
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-white text-black"
                  : "border border-white/[0.08]"
              }`}
            >
              <div className="mb-8">
                <span
                  className={`text-xs font-medium tracking-widest uppercase ${
                    p.highlight ? "text-black/40" : "text-white/30"
                  }`}
                >
                  {p.name}
                </span>
                <div className="flex items-end gap-1 mt-3">
                  <span className="text-5xl font-semibold">¥{p.price}</span>
                  <span
                    className={`text-sm mb-2 ${
                      p.highlight ? "text-black/40" : "text-white/40"
                    }`}
                  >
                    万/月（税別）
                  </span>
                </div>
                <p
                  className={`text-sm mt-4 leading-relaxed ${
                    p.highlight ? "text-black/60" : "text-white/50"
                  }`}
                >
                  {p.desc}
                </p>
              </div>
              <ul className="space-y-3 mt-auto">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-3 text-sm ${
                      p.highlight ? "text-black/70" : "text-white/50"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full flex-none ${
                        p.highlight ? "bg-black/30" : "bg-white/30"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
