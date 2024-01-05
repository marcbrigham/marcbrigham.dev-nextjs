import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 py-3 border-b z-10 bg-white dark:bg-slate-950">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-2xl">Marc <span className="text-primary">Brigham</span></Link>
                <div className="flex space-x-3 items-center">
                    <Link href="/resume" className="font-bold text-md hover:text-primary hover:transition">Resume</Link>
                    <Link href="/blog" className="font-bold text-md hover:text-primary hover:transition">Blog</Link>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    );
}