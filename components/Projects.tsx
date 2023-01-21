import React from "react";
import Card from "./Card";
import { Project } from "Interfaces";

type Prop = {
    projects: Project[];
};

const Projects = ({ projects }: Prop) => {
    return (
        <div className="py-12 bg-secondary-dark text-white px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-heading-l md:text-heading-xl font-bold">
                        Projects
                    </h2>
                    <button className="border-primary-green border-b-2 w-[120px] z-10 text-[16px] h-12 ">
                        CONTACT ME
                    </button>
                </div>
                <div className="grid grid-cols-1 mt-20 gap-x-8 gap-y-12">
                    {projects.map((project, idx) => {
                        return <Card key={idx} project={project} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
