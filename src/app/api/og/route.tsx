import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "One Man Ops";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#060607",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            fontWeight: 700,
            color: "#FAFAFA",
            letterSpacing: "4px",
            marginBottom: "20px",
          }}
        >
          ONE{" "}
          <span style={{ color: "#E8530E", marginLeft: "16px", marginRight: "16px" }}>
            MAN
          </span>{" "}
          OPS
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#A1A1AA",
            maxWidth: "900px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "#52525B",
            letterSpacing: "3px",
          }}
        >
          onemanops.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
