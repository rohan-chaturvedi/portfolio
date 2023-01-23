import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-primary-gray text-white">
      <footer className="max-w-7xl mx-auto">
        <hr />
        <div className="flex flex-row justify-between px-3 py-9 items-center relative">
          <div>
            <h3 className="text-heading-logo">Rohan</h3>
          </div>
          <nav className="flex flex-row gap-x-8 mr-3 text-white items-center z-10">
            <Link
              title="GitHub"
              aria-label="GitHub"
              href="https://github.com/rohan-chaturvedi"
              target="_blank"
            >
              <BsGithub
                size={18}
                className="hover:text-primary-green duration-150 ease-in-out"
              />
            </Link>
            <Link
              title="LinkedIn"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/rohan-chaturvedi-38279b64/"
              target="_blank"
            >
              <BsLinkedin
                size={18}
                className="hover:text-primary-green duration-150 ease-in-out"
              />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
