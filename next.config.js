/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: "http://192.168.129.1/QuantumLeap/public/api/",
  },
};

module.exports = nextConfig;
