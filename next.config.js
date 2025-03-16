// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   image : {
//     domains : ['cdn.sanity.io']
//   },
//   eslint: {
//     ignoreDuringBuilds: true, // ESLint ko build ke dauran ignore karne ke liye
//   },
// };

// export default nextConfig; // module.exports ke bajaye export default use karein

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: { // Corrected from 'image' to 'images'
//     domains: ['cdn.sanity.io'], // Add your allowed image domains here
//   },
//   eslint: {
//     ignoreDuringBuilds: true, // ESLint will be ignored during builds
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

module.exports = nextConfig; // Use module.exports for CommonJS
