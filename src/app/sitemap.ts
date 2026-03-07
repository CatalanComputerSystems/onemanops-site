import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://onemanops.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/agents`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agents/cipher`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agents/vitals`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agents/broadcast`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agents/venture`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agents/architect`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
