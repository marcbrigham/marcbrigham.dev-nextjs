import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4 sticky bottom-0 bg-white dark:bg-slate-950">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="https://github.com/marcbrigham">
          <Image
            src="/github.svg"
            width={30}
            height={30}
            alt="github"
            priority
            className="social-icon dark:invert"
          />
        </Link>
        <Link href="https://x.com/marcbrigham">
          <Image
            src="/x.svg"
            width={30}
            height={30}
            alt="github"
            priority
            className="fill-white dark:invert"
          />
        </Link>
      </div>
    </footer>
  );
}
