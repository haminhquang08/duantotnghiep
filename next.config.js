/** @type {import('next').NextConfig} */

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    swcMinify: false,
    images: {
      domains: ["http://localhost:3000/"],
    },
    experimental: {
      concurrentFeatures: true,
    },
  }
  return nextConfig
}






