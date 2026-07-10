import type { MetadataRoute } from "next";

const baseUrl = "https://www.anautotrading.co.tz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
