import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout/", "/download/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://onemanops.com"}/sitemap.xml`,
  };
}
