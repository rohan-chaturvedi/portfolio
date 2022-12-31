import React from "react";
import Image from "next/image";
import Button from "@layout/Button";
import Link from "next/link";
import { Project } from "Interfaces";

type Prop = {
    project: Project;
};

const Card = ({ project }: Prop) => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="relative">
                <div className="bg-secondary-dark duration-500 ease-in-out opacity-0 hover:opacity-70 w-full h-full z-5 absolute hidden md:flex flex-col justify-center items-center gap-y-4">
                    <Link
                        className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
                        href={project.url}>
                        VIEW PROJECT
                    </Link>
                    <Link
                        className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
                        href={project.github}>
                        VIEW CODE
                    </Link>
                </div>
                <Image
                    src={project.src}
                    alt="Resumefy app"
                    width={500}
                    height={400}
                    className="z-2"
                    priority
                />
            </div>
            <div>
                <h3 className="text-heading-m">{project.title}</h3>
                <div className="flex gap-x-4 mt-1 text-primary-lightgray">
                    {project?.skills.map((skill, idx) => {
                        return <span key={idx}>{skill}</span>;
                    })}
                </div>
            </div>
            <div className="flex flex-row lg:hidden gap-x-4">
                <Link
                    className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
                    href={project.url}>
                    VIEW PROJECT
                </Link>
                <Link
                    className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
                    href={project.github}>
                    VIEW CODE
                </Link>
            </div>
        </div>
    );
};

export default Card;
