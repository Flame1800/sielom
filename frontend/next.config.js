module.exports = {
  env: {
    API_HOST_DEV: "http://localhost:1337/api",
    API_HOST_PROD: "https://sielom.ru/api",
    API_URL: "https://sielom.ru"
  },
  async rewrites() {
    return [{ source: '/next-api/:path*', destination: '/api/:path*' }]
  }
  //images: {
  //  remotePatterns: [
  //    {
  //      protocol: "https",
  //      hostname: "sielom.ru",
  //      port: "",
  //      pathname: "/uploads/**",
  //    },
  //  ],
  //},
}
