"use client";
import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Skills } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <div
        className={`flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Content */}
        <div className="transition-transform duration-500 ease-in-out transform ">
          <span className="text-4xl">👋</span>
          <Heading className="text-black hover:text-slate-600 text-5xl">
            Hello there! I&apos;m Prem Patel
          </Heading>
          <Paragraph className="max-w-xl mt-4">
            I&apos;m a passionate <Highlight>full-stack developer</Highlight>{" "}
            who loves <Highlight>building innovative products</Highlight> and
            web applications that aim to make a difference.
          </Paragraph>
          <Paragraph className="max-w-xl mt-4">
            As a <Highlight>recent Computer Science graduate</Highlight>, I
            bring <Highlight>strong problem-solving skills</Highlight>,
            expertise in <Highlight>modern web development</Highlight>, and a
            keen eye for creating intuitive user experiences.
          </Paragraph>
          <Skills />
        </div>

        {/* Right Avatar */}
        <div className="flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <Image
            src="/avatar.jpg" // Replace with your avatar image path
            alt="Prem Patel"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Heading
          as="h2"
          className="font-black text-4xl mt-20 mb-4 trasition-transform duration-500 ease-in-out transform hover:scale-105"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
      </div>
    </Container>
  );
}
