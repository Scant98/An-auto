import type { MetadataRoute } from "next";

const baseUrl = "https://www.anautotrading.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about/", "/products/", "/services/", "/contact/"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
