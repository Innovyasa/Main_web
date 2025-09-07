/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this 'images' object
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Added this for your other placeholder images
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;