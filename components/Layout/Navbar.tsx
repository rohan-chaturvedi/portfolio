import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

const Navbar = () => {
    return (
        <div className="bg-secondary-dark text-white z-10">
            <div className="flex flex-col gap-y-4 lg:flex-row justify-between max-w-7xl px-3 mx-auto py-9 items-center relative">
                <div className="z-10">
                    <h3 className="text-heading-logo z-10">Rohan</h3>
                </div>
                <nav className="flex flex-row gap-x-8 mr-3 text-white items-center z-10 bg-secondary-dark bg-opacity-25 backdrop-blur-sm p-2 rounded-lg">
                    <Link href="https://github.com/rohan-chaturvedi">
                        <BsGithub size={18} className="hover:text-primary-green duration-150 ease-in-out"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/rohan-chaturvedi-38279b64/">
                        <BsLinkedin size={18} className="hover:text-primary-green duration-150 ease-in-out"/>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
