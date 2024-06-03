/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      API_ENDPOINT: process.env.HUB_API_URL
    },
  }
  
  module.exports = nextConfig