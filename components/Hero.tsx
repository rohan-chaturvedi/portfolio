import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-secondary-dark text-white py-16 ">
            <div className="max-w-5xl px-3 mx-auto">
                <div className="flex flex-col text-center md:text-left items-center lg:items-start mb-48 gap-y-4">
                    <Image
                        className="lg:absolute md:flex top-0 sm:right-4 lg:right-[2rem] xl:right-[12rem] 2xl:right-[25rem] -z-1 hidden"
                        alt="hero-image"
                        src="/hero-image.png"
                        width={400}
                        height={500}
                        priority
                    />
                    <Image
                        className="absolute md:hidden top-20 sm:right-4 lg:right-[2rem] xl:right-[12rem] 2xl:right-[25rem] -z-1"
                        alt="hero-image"
                        src="/hero-image.png"
                        width={200}
                        height={500}
                        priority
                    />
                    <h1 className="mt-[60%] md:mt-0 text-[40px] md:text-heading-xl mb-8 font-bold z-10">
                        <span>Nice to meet you!</span>
                        <br />
                        <span>
                            I'm{" "}
                            <span className="border-b-4 pb-[-2rem] border-primary-green">
                                Henry Oke.
                            </span>
                        </span>
                    </h1>
                    {/* <BrandingCircle/> */}
                    <p className="max-w-sm mb-12 text-body-m font-medium">
                        Based in Toronto, I'm a front-end developer passionate
                        about building accessible web apps that users love.
                    </p>

                    <a
                        href="/#contact"
                        className="border-primary-green border-b-2 w-[100px] z-10 text-[16px] h-9 hover:text-primary-green duration-100 ease-in-out">
                        CONTACT ME
                    </a>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Hero;
