import Card from "./Card";
import { Project } from "Interfaces";
import Link from "next/link";

const Projects = () => {
  const projects: Array<Project> = [
    {
      title: "Keyspace",
      skills: ["React", "Typescript", "Python", "Django"],
      src: "/keyspace.webp",
      url: "https://keyspace.cloud",
      github: "https://github.com/Keyspace-cloud",
    },
    {
      title: "DeepSource UI",
      skills: ["Vue", "Nuxt", "Tailwind", "GraphQL"],
      src: "/deepsource.webp",
      url: "https://deepsource.io",
      github: "https://github.com/deepsourcelabs",
    },
  ];

  return (
    <div className="py-12 bg-secondary-dark text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-heading-l md:text-heading-xl font-bold">
            Projects
          </h2>
          <Link
            href="#contact"
            className="border-primary-green border-b-2 w-[100px] z-10 text-[16px] h-9 hover:text-primary-green duration-100 ease-in-out"
          >
            CONTACT ME
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-20 gap-x-8 gap-y-16">
          {projects.map((project, idx) => {
            return <Card key={idx} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
