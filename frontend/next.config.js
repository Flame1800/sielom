
// Injected content via Sentry wizard below
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  {
      compiler: {
          styledComponents: true
      },
    env: {
      API_HOST_DEV: "http://localhost:1337/api",
      API_HOST_PROD: "https://sielom.ru/api",
      API_URL: "https://sielom.ru",
      ATOL_API: "https://online.atol.ru/possystem/v4",
      ATOL_LOGIN: "419da9bb-97c5-4dbb-b6c9-d2e8fde75d0e",
      ATOL_PASSWORD: "0swad3lrx",
      ATOL_GROUPCODE: "group_code_18512",
      SNGB_API: "https://ecm.sngb.ru/rp/api/v1",
      SNGB_LOGIN: 3763,
      SNGB_PASSWORD: "6661bc9c49ede82d9d9ac6a69a9ad82fd39839cd"
    },
    async rewrites() {
      return [{ source: '/next-api/:path*', destination: '/api/:path*' }]
    },
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "sielom",
    project: "javascript-nextjs",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
