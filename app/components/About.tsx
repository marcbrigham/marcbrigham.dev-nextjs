import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I&apos;m Marc. <br /><span className="text-primary">Front End Engineer</span>
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
                <div className="w-full flex justify-center md:justify-end">
                    <Image 
                        src={'/mb_headshot.jpg'} 
                        width={450} 
                        height={450} 
                        alt="hero"
                        priority
                        className="rounded-full border aspect-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
  }