import { WorkHistory } from "@/components/WorkHistory";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Prem Patel",
  description:
    "Prem Patel, a passionate full-stack developer and recent Computer Science graduate with strong problem-solving skills and expertise in modern web development.",
};
export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate full-stack developer dedicated to{" "}
        <Highlight>creating innovative solutions</Highlight> and web
        applications that deliver meaningful value and positively impact
        countless lives.
      </Paragraph>

      <WorkHistory />
    </Container>
  );
}
