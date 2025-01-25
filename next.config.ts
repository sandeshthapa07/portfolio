
import createMDX from '@next/mdx';
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
 
};
 
const withMDX = createMDX({
  
});
 
export default withMDX(nextConfig);





