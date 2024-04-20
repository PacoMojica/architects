/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: 'custom',
    loaderFile: './src/utils/loader.js',
  },
};

export default nextConfig;
