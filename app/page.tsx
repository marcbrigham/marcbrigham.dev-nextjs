import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default async function Home() {
    return (
        <main className="body-font">
            <About />
            <Projects />
            <Skills />
        </main>
    )
}