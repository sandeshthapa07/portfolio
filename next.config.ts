
import createMDX from '@next/mdx';
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "md", "tsx"],
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  },
};
 
const withMDX = createMDX({
  extension: /\.mdx?$/,
  
 
});

export default withMDX(nextConfig);





