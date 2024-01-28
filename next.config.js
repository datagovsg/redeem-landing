/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   // Image Optimization using Next.js' default loader is not compatible with next export. To manually deploy the next-app example, you must disable image optimization.
  //   // https://docs.amplify.aws/javascript/deploy-and-host/frameworks/deploy-nextjs-app/#deploy-and-host-an-ssg-only-app
  //   unoptimized: true,
  // },
}
module.exports = nextConfig
