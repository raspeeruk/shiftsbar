import type { MetadataRoute } from "next";

const BASE = "https://shiftsbar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/record",
    "/pricing",
    "/privacy",
    "/terms",
  ];

  const guidePages = [
    "/guides/what-is-sbar-nursing",
    "/guides/sbar-examples",
    "/guides/shift-report-template",
    "/guides/nursing-handoff-best-practices",
    "/guides/bedside-shift-report",
    "/guides/sbar-vs-isbar",
  ];

  const examplePages = [
    "/guides/examples/med-surg",
    "/guides/examples/icu",
    "/guides/examples/pediatric",
    "/guides/examples/emergency",
    "/guides/examples/postpartum",
    "/guides/examples/psychiatric",
    "/guides/examples/orthopedic",
    "/guides/examples/cardiac",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...guidePages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...examplePages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
