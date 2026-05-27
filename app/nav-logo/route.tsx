import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "public", "fonts", "Orbitron-Black.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 900,
          height: 200,
          background: "transparent",
          display: "flex",
          alignItems: "flex-start",
          paddingTop: 40,
          paddingLeft: 20,
          paddingRight: 40,
          paddingBottom: 60,
        }}
      >
        <span
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "2px",
            whiteSpace: "nowrap",
            transform: "skewX(-10deg)",
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, #aaaaaa 20%, #ffffff 40%, #555555 60%, #cccccc 80%, #444444 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Comp Systems
        </span>
      </div>
    ),
    {
      width: 900,
      height: 200,
      fonts: [{ name: "Orbitron", data: fontData, weight: 900, style: "normal" }],
    }
  );
}
