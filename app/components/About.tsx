import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I&apos;m Marc 👋<br /><span className="text-primary mt-4 block">Front End Engineer</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Front-End Engineer with 6+ years of experience. Skilled in crafting intuitive, responsive web interfaces that engage and delight users.
                    </p>
                    <div className="flex justify-center">
                        <Button asChild className="w-full mr-4">
                            <Link href="mailto:marc.brigham@gmail.com">Work With Me</Link>
                        </Button>
                        <Button asChild className="w-full">
                            <Link href="#projects">Past Work</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
  }