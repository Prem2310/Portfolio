import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://res.cloudinary.com/dkvsiuokl/image/upload/v1749452496/code-square-svgrepo-com_tsw3b9.svg",
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
        src: "https://res.cloudinary.com/dkvsiuokl/image/upload/v1749237116/profile_b716fj.jpg",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://res.cloudinary.com/dkvsiuokl/image/upload/v1749453371/2025-06-09_12-45_x2lv56.png",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      }
    ],
  };
}
