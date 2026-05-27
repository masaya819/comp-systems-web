import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "public", "fonts", "Orbitron-Black.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "#080808",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative",
        }}
      >
        {/* コーナーアクセント */}
        <div style={{ position: "absolute", top: 36, left: 36, width: 24, height: 24, borderTop: "1.5px solid rgba(180,180,180,0.25)", borderLeft: "1.5px solid rgba(180,180,180,0.25)", display: "flex" }} />
        <div style={{ position: "absolute", top: 36, right: 36, width: 24, height: 24, borderTop: "1.5px solid rgba(180,180,180,0.25)", borderRight: "1.5px solid rgba(180,180,180,0.25)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 36, left: 36, width: 24, height: 24, borderBottom: "1.5px solid rgba(180,180,180,0.25)", borderLeft: "1.5px solid rgba(180,180,180,0.25)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 36, right: 36, width: 24, height: 24, borderBottom: "1.5px solid rgba(180,180,180,0.25)", borderRight: "1.5px solid rgba(180,180,180,0.25)", display: "flex" }} />

        {/* CS テキスト */}
        <div
          style={{
            fontSize: 220,
            fontWeight: 900,
            letterSpacing: "-8px",
            display: "flex",
            lineHeight: 1.2,
            transform: "skewX(-10deg)",
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, #aaaaaa 20%, #ffffff 40%, #555555 60%, #cccccc 80%, #444444 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CS
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
