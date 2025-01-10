"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      {/* About Section */}
      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Prem Patel - a software developer, tech
          enthusiast, and competitive programmer who thrives on challenges and
          innovation.
        </Paragraph>
        <Paragraph className="mt-4">
          My journey began with a love for solving problems, which led me to
          embrace programming and web development. I specialize in building
          robust web applications with React, Next.js, and Tailwind CSS, always
          striving to merge functionality with aesthetic design.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond coding, I&apos;m passionate about competitive programming,
          where I enjoy tackling complex algorithms and data structure problems.
          The thrill of solving intricate challenges and optimizing solutions is
          what drives me forward.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;ve also explored the world of hackathons and team-based
          competitions, where I&apos;ve had the opportunity to collaborate with
          like-minded individuals to create impactful projects. These
          experiences have honed my teamwork and leadership skills while
          fostering my creativity.
        </Paragraph>
        <Paragraph className="mt-4">
          What sets me apart is my curiosity and adaptability. I love learning
          about cutting-edge technologies and applying them to real-world
          problems. From building an AI-powered chatbot for healthcare to
          creating sports infrastructure management platforms, I strive to make
          a difference through technology.
        </Paragraph>
        <Paragraph className="mt-4">
          Through this platform, I aim to share my journey, projects, and
          insights. Whether you&apos;re a developer seeking solutions, a fellow
          programmer looking for inspiration, or someone who appreciates
          well-crafted designs, I hope you find value here.
        </Paragraph>
        <Paragraph className="mt-4">
          Thanks for visiting! Let&apos;s build, learn, and innovate together.
        </Paragraph>
      </div>

      {/* Education Section */}
      <motion.div
        className="max-w-4xl mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="border-l-2 border-gray-300 pl-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Adani University</h3>
            <p className="text-sm text-gray-600">2021 - 2025</p>
            <p className="text-md mt-1">
              Bachelor&apos;s Degree in Computer Science with a specialization
              in AI/ML
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
