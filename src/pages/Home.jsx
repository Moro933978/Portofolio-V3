import React, { useState, useEffect } from "react";
import { Mouse, Sparkles, ExternalLink, Mail, Rocket } from "lucide-react";
import Orb from "../Components/Animatedgift";
import SocialLinks from "../Components/SocialLinks";
import { motion } from "framer-motion";

const Hero = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    const words = ["Frontend Developer", "Web Designer", "AI Machine Learning"];

    useEffect(() => {
        const currentWord = words[loopNum % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
            } else {
                setText(currentWord.substring(0, text.length - 1));
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            }

            if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }
        }, isDeleting ? 80 : 140);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden py-25 " id="home">

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col items-start space-y-6">

                        {/* Badge */}
                        <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                                        <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                                        Ready to Innovate
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
                                <span className="relative inline-block">
                                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                        Intelligent
                                    </span>
                                </span>
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                                    <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                                        Maker
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Typing */}
                        <div data-aos="fade-right" data-aos-delay="200"
                            className="flex items-center gap-2 text-xl md:text-2xl text-gray-400">
                            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold">I am a</span>
                            <span>{text}</span>
                            <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] animate-blink"></span>
                        </div>

                        {/* Description */}
                        <p data-aos="fade-right" data-aos-delay="300" className="text-gray-400 max-w-md">
                            Specializing in building exceptional digital experiences with modern technologies and AI.
                        </p>

                        {/* Tech Stack */}
                        <div className="hidden sm:flex gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="400">
                            {["React", "Javascript", "Node.js", "Tailwind"].map((tech, i) => (
                                <span key={i} className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur-6xl text-gray-400">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-nowrap gap-3 pt-4" data-aos="zoom-in" data-aos-delay="500">
                            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                                <button className="group relative w-[160px] cursor-pointer">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                                        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                                        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                                            <Mail size={16}></Mail>
                                            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                                                Hire Me
                                            </span>
                                        </span>
                                    </div>
                                </button>
                            </a>

                            <a href="#portofolio" onClick={(e) => scrollToSection(e, "portofolio")}>
                                <button className="group relative w-[160px] cursor-pointer">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                                    <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                                        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                                        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                                            <Rocket size={16} />
                                            <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                                                View More
                                            </span>
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="600">
                            <SocialLinks />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div data-aos="zoom-in" data-aos-delay="300" className="relative flex justify-center items-center">
                        <div className="absolute w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                        <Orb />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <div className="w-[26px] h-[42px] rounded-full border-2 border-purple-500/30 flex justify-center p-1.5 backdrop-blur-sm cursor-pointer"
                        onClick={(e) => scrollToSection(e, "about")}>
                        <motion.div
                            animate={{ y: [0, 15, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-purple-500 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;