import { defineConfig } from "vitepress";

const algoliaAppId = "5MDTLT6KV7";
const algoliaApiKey = "5d1c2450c55de9919ef9254517c3d823";
const algoliaIndexName = "japan_kevinstack_dev_5mdtlt6kv7_pages";
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
    search: {
      provider: "algolia",
      options: {
        appId: algoliaAppId,
        apiKey: algoliaApiKey,
        indexName: algoliaIndexName,
      },
    },
  },
});
