import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";

const Navbar = () => {
    return (
        <div className="bg-secondary-dark text-white z-10">
            <div className="flex flex-col gap-y-4 lg:flex-row justify-between max-w-5xl px-3 mx-auto py-9 items-center relative">
                <div className="z-10">
                    <h3 className="text-heading-logo z-10">HenryOke</h3>
                </div>
                <nav className="flex flex-row gap-x-8 mr-3 text-white items-center z-10">
                    <Link href="/#">
                        <BsGithub size={18} />
                    </Link>
                    <Link href="/#">
                        <BsLinkedin size={18} />
                    </Link>
                    <Link href="/#">
                        <BsTwitter size={18} />
                    </Link>
                    <Link href="/#">
                        <SiFrontendmentor size={18} />
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
