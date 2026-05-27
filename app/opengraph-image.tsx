import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Comp Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "public", "fonts", "Orbitron-Black.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative",
        }}
      >
        {/* グリッドライン */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(180,180,180,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(180,180,180,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* コーナーアクセント */}
        <div style={{ position: "absolute", top: 48, left: 48, width: 28, height: 28, borderTop: "1.5px solid rgba(180,180,180,0.2)", borderLeft: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", top: 48, right: 48, width: 28, height: 28, borderTop: "1.5px solid rgba(180,180,180,0.2)", borderRight: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 48, left: 48, width: 28, height: 28, borderBottom: "1.5px solid rgba(180,180,180,0.2)", borderLeft: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 48, right: 48, width: 28, height: 28, borderBottom: "1.5px solid rgba(180,180,180,0.2)", borderRight: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />

        {/* メインテキスト */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "4px",
            display: "flex",
            lineHeight: 1.3,
            marginBottom: 32,
            transform: "skewX(-10deg)",
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, #aaaaaa 20%, #ffffff 40%, #555555 60%, #cccccc 80%, #444444 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Comp Systems
        </div>

        {/* サブテキスト */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: "10px",
            color: "rgba(180,180,180,0.3)",
            display: "flex",
            transform: "skewX(-10deg)",
          }}
        >
          AI CONSULTING
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Orbitron", data: fontData, weight: 900, style: "normal" },
      ],
    }
  );
}
