//** @type {import('next').NextConfig} */

const createMDX = require('@next/mdx')

const withMDX = createMDX({})

const nextConfig = {
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)




