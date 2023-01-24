import { createRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const imageRef = createRef<HTMLImageElement>();

  useEffect(() => {
    let observer = new IntersectionObserver((elements) => {
      if (elements[0].isIntersecting)
        imageRef.current?.classList.remove("grayscale", "blur-sm");
      else imageRef.current?.classList.add("grayscale", "blur-sm");
    });

    observer.observe(imageRef.current as Element);
  }, []);

  return (
    <div className="bg-secondary-dark text-white py-16 ">
      <div className="max-w-7xl px-3 mx-auto">
        <div className="flex flex-col text-center md:text-left items-center lg:items-start mb-48 gap-y-4">
          <Image
            className="lg:absolute md:flex top-0 sm:right-4 lg:right-[2rem] xl:right-[12rem] 2xl:right-[25rem] -z-1 hidden rounded-b-sm filter grayscale blur-sm ease-in-out duration-700 shadow-2xl"
            alt="hero-image"
            src="/rohan.webp"
            width={444.5}
            height={700}
            priority
            ref={imageRef}
          />
          <Image
            className="absolute md:hidden top-20 sm:right-4 lg:right-[2rem] xl:right-[12rem] 2xl:right-[25rem] -z-1 rounded-md"
            alt="hero-image"
            src="/rohan.webp"
            width={317.5}
            height={500}
            priority
          />
          <h1 className="mt-[60%] md:mt-0 text-[40px] md:text-heading-xl mb-8 font-bold z-10">
            <span>Hey! ✌️</span>
            <br />
            <span>
              I'm{" "}
              <span className="border-b-4 pb-[-2rem] border-primary-green">
                Rohan.
              </span>
            </span>
          </h1>
          {/* <BrandingCircle/> */}
          <p className="max-w-sm mb-12 text-body-m font-medium opacity-70">
            I'm a full-stack developer passionate about building privacy focused
            apps and experimenting with emerging tech.
          </p>

          <Link
            href="#contact"
            className="border-primary-green border-b-2 w-[100px] z-10 text-[16px] h-9 hover:text-primary-green duration-100 ease-in-out"
          >
            CONTACT ME
          </Link>
        </div>
        <hr className="opacity-10" />
      </div>
    </div>
  );
};

export default Hero;
