
import createMDX from '@next/mdx';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "md", "tsx"],
  reactStrictMode: true,
};
 
const withMDX = createMDX({
  
});
 
export default withMDX(nextConfig);


