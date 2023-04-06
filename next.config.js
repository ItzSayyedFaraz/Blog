/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["images.unsplash.com","uploads-ssl.webflow.com"],
},
}

module.exports = nextConfig



// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   optimizeFonts: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname:"uploads-ssl.webflow.com",
//       },
//     ],
//     minimumCacheTTL: 1500000,
//   },
// };

// module.exports = nextConfig;