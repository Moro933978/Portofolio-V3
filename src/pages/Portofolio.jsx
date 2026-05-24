import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Award, Zap, Globe, ExternalLink, ChevronDown } from "lucide-react";
import ProjectCard from "../Components/ProjectCard";
import CertificateCard from "../Components/CertifcateCard";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        id: 1,
        title: "Gostar Gamming Chanel",
        image: "Gostar.jpeg",
        desc: "Interactive Website For Gostar Gamming Chanel For Football And Gamming",
        liveLink: "#",
        detailsLink: "#/project/1"
    },
    {
        id: 2,
        title: "QR Code Generator",
        image: "QRCode.png",
        desc: "An elegant, glassmorphic web app that instantly converts text or URLs into QR codes, featuring quick downloading and native sharing.",
        liveLink: "https://moro933978.github.io/QR-Code/",
        detailsLink: "#/project/2"
    },
    {
        id: 3,
        title: "Gostar Gamming Portofolio",
        image: "Screenshot (153).png",
        desc: "Professional Website For Gostar Gamming In Compitition for the best design",
        liveLink: "#",
        detailsLink: "#/project/3"
    },
    {
        id: 4,
        title: "Crop Care Ai",
        image: "Screenshot (186).png",
        desc: "A platform dedicated to revolutionizing agriculture and simplifying farming for everyone.",
        liveLink: "https://moro933978.github.io/Crop-Care-Ai/",
        detailsLink: "#/project/4"
    },
    {
        id: 5,
        title: "Crop-Care With Py",
        image: "MVP.png",
        desc: "A Early Prototype MVP For Crop Care AI With Python",
        liveLink: "#",
        detailsLink: "#/project/5"
    },
];

const certificates = [
    {
        id: 1,
        issuer: "Coursera",
        image: "Certifcate1.jpeg",
        link: "#"
    },
    {
        id: 2,
        title: "React Certificate",
        issuer: "Meta",
        image: "Hwawi.png",
        link: "#"
    },
    {
        id: 3,
        title: "JavaScript Mastery",
        issuer: "Udemy",
        image: "photo - Copy.png",
        link: "#"
    },
    {
        id: 4,
        title: "Python Basics",
        issuer: "Google",
        image: "Py.png",
        link: "#"
    },
    {
        id: 5,
        title: "UI/UX Design",
        issuer: "Adobe",
        image: "Data.png",
        link: "#"
    },
    {
        id: 6,
        title: "Backend Development",
        issuer: "IBM",
        image: "Info.png",
        link: "#"
    },
    {
        id: 7,
        title: "Advanced React",
        issuer: "Meta",
        image: "Ai.png",
        link: "#"
    },
    {
        id: 8,
        title: "Advanced React",
        issuer: "Meta",
        image: "Ai.png",
        link: "#"
    },
];

const allTech = [
    { name: "HTML", icon: "html.svg" },
    { name: "css", icon: "css.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "tailwind", icon: "tailwind.svg" },
    { name: "bootstrap", icon: "bootstrap.svg" },
    { name: "python", icon: "python.png" },
    { name: "react", icon: "reactjs.svg" },
    { name: "firebase", icon: "firebase.svg" },
    { name: "node", icon: "nodejs.svg" },
    { name: "material ui", icon: "MUI.svg" },
];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [visibleCerts, setVisibleCerts] = useState(6);
    const tabs = [
        { id: "projects", label: "Projects", icon: Code },
        { id: "certificates", label: "Certificates", icon: Award },
        { id: "skills", label: "Tech Stack", icon: Zap },
    ];

    const [showAllProjects, setShowAllProjects] = useState(false);

    const visibleProjects = showAllProjects
        ? projects
        : projects.slice(0, 4);

    return (
        <section className="w-full py-20 text-white overflow-hidden" id="portofolio">
            <div className="max-w-6xl mx-auto px-6 relative">

                {/* 🔥 Title Section */}
                <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                        <span style={{
                            color: '#6366f1',
                            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Portfolio Showcase
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                        Explore my journey through projects, certifications, and technical expertise.
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                <div className="flex justify-center mb-16 px-2" data-aos="fade-up" data-aos-duration="1000">
                    <div className="relative flex items-center py-3 px-4 rounded-3xl bg-[#0f0c22]/50 border border-white/10 backdrop-blur-xl w-full justify-between overflow-hidden min-h-[90px] md:min-h-[110px]">

                        {tabs.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`relative z-10 flex flex-col items-center justify-center gap-2 flex-1 py-2 px-2 mx-2 hover:bg-white/5
    cursor-pointer transition-all duration-300 rounded-2xl font-bold text-xs sm:text-sm md:text-base whitespace-nowrap select-none h-full ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabGlow"
                                            className="absolute inset-0 rounded-2xl bg-[#2e1065]/60 border-2 border-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.6),inset_0_0_15px_rgba(236,72,153,0.2)]"
                                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                        />
                                    )}

                                    <Icon size={22} className="relative z-10 opacity-90 md:w-6 md:h-6" />
                                    <span className="relative z-10 tracking-wide">{item.label}</span>
                                </button>
                            );
                        })}

                    </div>
                </div>

                {/*  Content Area */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {/*  Projects Grid */}
                        {activeTab === "projects" && (
                            <motion.div
                                key="projects-tab"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full"
                                >
                                    <AnimatePresence mode="popLayout">
                                        {visibleProjects.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ProjectCard project={project} />
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.div>

                                {projects.length > 4 && (
                                    <motion.div
                                        layout
                                        className="flex justify-start w-full max-w-5xl mx-auto mt-12 px-1"
                                    >
                                        <button
                                            onClick={() => setShowAllProjects(!showAllProjects)}
                                            className="relative flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold 
                               bg-white/5 border border-white/10 backdrop-blur-xl
                               hover:bg-white/10 hover:border-purple-500/40
                               transition-all duration-300 hover:scale-105
                               shadow-lg overflow-hidden group"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="relative z-10 text-sm">
                                                {showAllProjects ? "Show Less" : "Show More"}
                                            </span>
                                            <ChevronDown
                                                className={`relative z-10 w-5 h-5 transition-transform duration-300 ${showAllProjects ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/*  Tech Stack */}
                        {activeTab === "skills" && (
                            <motion.div
                                key="skills"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8 items-center "
                            >
                                {allTech.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="group relative w-full py-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2"
                                    >
                                        <div className="relative z-10 flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                                                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                                            </div>
                                            <h3 className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                                                {tech.name}
                                            </h3>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/*  Certificates Grid */}
                        {activeTab === "certificates" && (
                            <motion.div
                                key="certs-tab"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center w-full"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                    {certificates.slice(0, visibleCerts).map((cert) => (
                                        <CertificateCard key={cert.id} cert={cert} />
                                    ))}
                                </div>

                                {certificates.length > 6 && (
                                    <div className="flex mt-10 w-full justify-start">
                                        <button
                                            onClick={() =>
                                                setVisibleCerts(
                                                    visibleCerts === certificates.length ? 6 : certificates.length
                                                )
                                            }
                                            className="relative flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold 
                                    bg-white/5 border border-white/10 backdrop-blur-xl
                                    hover:bg-white/10 hover:border-purple-500/40
                                    transition-all duration-300 hover:scale-105
                                    shadow-lg overflow-hidden group"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                                            <span className="relative z-10 text-sm">
                                                {visibleCerts === certificates.length ? "Show Less" : "Show More"}
                                            </span>
                                            <ChevronDown
                                                className={`relative z-10 w-5 h-5 transition-transform duration-300 ${visibleCerts === certificates.length ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;