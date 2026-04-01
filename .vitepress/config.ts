import { defineConfig } from "vitepress";

const algoliaAppId = process.env.ALGOLIA_APP_ID;
const algoliaApiKey = process.env.ALGOLIA_API_KEY;
const algoliaIndexName = process.env.ALGOLIA_INDEX_NAME;
const hasAlgolia = Boolean(algoliaAppId && algoliaApiKey && algoliaIndexName);
const githubUrl = "https://github.com/kevinstackio/japan-pr";

export default defineConfig({
  title: "JapanPR",
  description: "赴日计划，通过高才解锁永驻。",
  lang: "zh-CN",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/vitepress-logo-mini.svg" }],
    [
      "meta",
      {
        name: "algolia-site-verification",
        content: "F569E8F1CF800B2C",
      },
    ],
  ],
  themeConfig: {
    logo: "/vitepress-logo-mini.svg",
    socialLinks: [{ icon: "github", link: githubUrl }],
    search: hasAlgolia
      ? {
          provider: "algolia",
          options: {
            appId: algoliaAppId!,
            apiKey: algoliaApiKey!,
            indexName: algoliaIndexName!,
          },
        }
      : {
          provider: "local",
        },
  },
});
