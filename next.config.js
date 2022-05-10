/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};

module.exports = config;
