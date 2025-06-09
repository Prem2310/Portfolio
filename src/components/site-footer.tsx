import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="screen-line-before border-x border-edge pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
        Built by{" "}
        <a
          className="link"
          href="https://github.com/prem2310/"
          target="_blank"
          rel="noopener"
        >
          @Prem2310
        </a>

      </p>


      {/* <div className="screen-line-before grid grid-cols-2 gap-1 p-4 sm:grid-cols-4">
        {USER.otherWebsites.map((website) => {
          return (
            <span
              key={website}
              className="font-mono text-xs text-muted-foreground"
            >
              {urlToName(website)}
            </span>
          );
          // return (
          //   <a
          //     key={website}
          //     className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          //     href={website}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     {urlToName(website)}
          //   </a>
          // );
        })}
      </div> */}
    </footer>
  );
}
