import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { USER } from "@/data/user";
import { About } from "@/features/profile/components/about";
import { Achivement } from "@/features/profile/components/achivements";
import { Experiences } from "@/features/profile/components/experiences";
import { Header } from "@/features/profile/components/header";
import { Overview } from "@/features/profile/components/overview";
import { Projects } from "@/features/profile/components/projects";
import { SiteHeader } from "@/features/profile/components/site-header";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { cn } from "@/lib/cn";

export default function Page() {
  const websiteJsonLd = getPageJsonLd();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>

      <SiteHeader />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-2 md:max-w-3xl">
          <Header />
          <Pattern />

          <Overview />
          <Pattern />

          <SocialLinks />
          <Pattern />

          <About />
          <Pattern />

          <TeckStack />
          <Pattern />
          <Pattern />

          <Experiences />
          <Pattern />

          <Projects />
          <Pattern />

          <Achivement />
          <Pattern />


          <SiteFooter />
        </div>
      </div>

      {/* <QuickActions /> */}

      <ScrollTop />
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
