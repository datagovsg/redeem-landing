/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/rewards',
        destination: '/rewards/resident',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
