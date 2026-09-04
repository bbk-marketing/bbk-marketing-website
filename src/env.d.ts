/// <reference path="../.astro/types.d.ts" />

declare namespace NodeJS {
  interface ProcessEnv {
    INTERNAL_SERVICE_SECRET: string;
    SALES_HUB_URL: string;
  }
}