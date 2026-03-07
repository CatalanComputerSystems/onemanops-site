import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://onemanops.com"),
  title: "One Man Ops — You Don't Need a Team. You Need a System.",
  description:
    "Five AI agents spanning trading, longevity, content, business, and systems. Deploy your unfair advantage with battle-tested strategies and validated outcomes.",
  openGraph: {
    title: "One Man Ops — You Don't Need a Team. You Need a System.",
    description:
      "Five AI agents spanning trading, longevity, content, business, and systems. Deploy your unfair advantage.",
    images: ["/api/og?title=One+Man+Ops"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Man Ops — You Don't Need a Team. You Need a System.",
    description:
      "Five AI agents. Trading. Longevity. Content. Business. Systems. Deploy your unfair advantage.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
