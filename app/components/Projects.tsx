import { CodeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { projects } from "../lib/homeData";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container pt-20 ml-auto mr-auto px-10 pb-20">
        <div className="flex flex-col w-full mb-6">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-primary" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-center">
            What I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-center">
            For over six years, I&apos;ve specialized in crafting websites for college and university athletic departments. Most of my projects are web pages tailored to meet their specific requirements.
          </p>
        </div>
        <div className="flex flex-wrap h-full lg:w-50">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-full md:w-1/2 lg:w-1/3 group">
              <div className="m-2">
                <div className="overflow-hidden border-t border-l border-r rounded-t-lg">
                    <Image 
                        src={project.image}
                        width={450} 
                        height={450} 
                        alt="gallery"
                        priority
                        className={`${project.title === 'College Football Playoff' || project.title === 'NCHC TV'? 'py-4' : ''} inset-0 w-full h-full aspect-video dark:bg-white transition group-hover:scale-125 group-hover:transition group-hover:ease-in-out`}
                    />
                </div>
                <div className="project-overlay px-8 py-10 relative z-8 w-full bg-white dark:bg-slate-950 border rounded-b-lg">
                  <h2 className="tracking-widest text-center text-sm title-font font-medium text-primary mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-center text-lg font-medium mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-center">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}