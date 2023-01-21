import React from "react";
import Image from "next/image";
import Button from "@layout/Button";
import Link from "next/link";
import { Project } from "Interfaces";
import { url } from "inspector";

type Prop = {
  project: Project;
};

const Card = ({ project }: Prop) => {
  return (
    <div className="flex flex-col gap-y-4 group">
      <div className="relative overflow-hidden">
        <div className="bg-secondary-dark duration-300 ease-in-out opacity-0 hover:opacity-70 w-full h-full z-10 absolute hidden md:flex flex-col justify-center items-center gap-y-4">
          <Link
            className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
            href={project.url}
            target="_blank"
          >
            VIEW PROJECT
          </Link>
          <Link
            className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
            href={project.github}
            target="_blank"
          >
            VIEW CODE
          </Link>
        </div>
        {/* <Image
          src={project.src}
          alt={project.title}
          width={500}
          height={400}
          className="z-2"
          priority
        /> */}
        <div
          className="h-[400px] w-[500px] overflow-hidden"
          
        >
            <div className="absolute inset-0 group-hover:scale-105 bg-cover duration-300 ease-in-out" style={{ backgroundImage: `url(${project.src})` }}></div>
        </div>
      </div>
      <div>
        <h3 className="text-heading-m group-hover:text-primary-green duration-300 ease-in-out">
          {project.title}
        </h3>
        <div className="flex gap-x-4 mt-1 text-primary-lightgray">
          {project?.skills.map((skill, idx) => {
            return <span key={idx}>{skill}</span>;
          })}
        </div>
      </div>
      <div className="flex flex-row lg:hidden gap-x-4">
        <Link
          className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
          href={project.url}
          target="_blank"
        >
          VIEW PROJECT
        </Link>
        <Link
          className={`hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex`}
          href={project.github}
          target="_blank"
        >
          VIEW CODE
        </Link>
      </div>
    </div>
  );
};

export default Card;
