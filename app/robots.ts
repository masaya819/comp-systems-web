import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/pitch" },
    ],
    sitemap: "https://www.compsystems.net/sitemap.xml",
  };
}
