import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prem Patel",
  description:
    "Prem Patel, a passionate full-stack developer and recent Computer Science graduate with strong problem-solving skills and expertise in modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        {/* Sidebar is persistent and doesn't re-render */}
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 p-4 bg-gray-100 flex-1 overflow-hidden">
          {/* Only this section changes across navigation */}
          <main
            id="main-content"
            className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
