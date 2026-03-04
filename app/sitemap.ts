import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.thiravugal.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
