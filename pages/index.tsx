import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "@components/Layout/Layout";
import Hero from "@components/Hero";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

import { projects } from "@lib/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <main className="scroll-smooth">
                <Layout>
                    <Hero />
                    <Experience />
                    <Projects projects={projects} />
                    <Contact />
                </Layout>
            </main>
        </>
    );
}
