import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://res.cloudinary.com/dkvsiuokl/image/upload/v1749241984/P_1_duslyn.png",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://res.cloudinary.com/dkvsiuokl/image/upload/v1749241984/P_1_duslyn.png",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      }
    ],
  };
}
