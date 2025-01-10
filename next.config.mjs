/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  images: {
    loader: "default",
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "prempatel.netlify.app",
    ],
  },
  experimental: {
    mdxRs: true,
  },
  basePath: "/",
  assetPrefix: "/",
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
