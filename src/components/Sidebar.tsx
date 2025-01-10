"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { Heading } from "./Heading";
import { Badge } from "./Badge";

export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: -200 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed lg:relative z-[100] left-0 top-0 h-screen bg-neutral-100 px-6 py-10 max-w-[14rem] lg:w-fit flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/Prem_Patel_Resume.pdf" text="Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Sidebar"
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href; // Exact match logic

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "flex items-center space-x-2 py-2 px-2 text-sm rounded-md transition duration-200",
            isActive(link.href)
              ? "bg-white shadow-lg text-primary"
              : "text-secondary hover:text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-green-400"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center space-x-2 py-2 px-2 text-sm rounded-md text-secondary hover:text-primary transition duration-200"
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/avatar.jpg"
        alt="Prem Patel's Avatar"
        height={50}
        width={50}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col text-sm">
        <p className="font-bold text-primary">Prem Patel</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
