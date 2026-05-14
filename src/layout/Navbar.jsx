import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = ["Home", "About", "Portofolio", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setIsOpen(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observers = [];
        navLinks.forEach((link) => {
            const section = document.getElementById(link.toLowerCase());
            if (section) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            setActiveTab(link);
                        }
                    },
                    { threshold: 0.6 }
                );
                observer.observe(section);
                observers.push(observer);
            }
        });
        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.nav
                    initial={{ y: -120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -120, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-6 left-0 right-0 mx-auto w-[95%] max-w-6xl z-[9999] bg-[#030014]/50"
                >
                    <div className="relative flex items-center justify-between px-4 py-2 rounded-2xl border border-purple-500/30  backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">

                        <div className="absolute inset-0 rounded-2xl border border-purple-500/10 pointer-events-none shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]"></div>

                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            Omar<span className="text-purple-500">.</span>
                        </h1>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8 relative">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className={`relative text-sm font-medium transition-all duration-300 ${activeTab === link ? "text-white" : "text-gray-400 hover:text-purple-400"
                                        }`}
                                >
                                    {link}
                                    {activeTab === link && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
                                        >
                                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]" />
                                            <div className="w-10 h-4 bg-purple-500/20 blur-md rounded-full mt-1"></div>
                                        </motion.div>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all active:scale-95 cursor-pointer"
                        >
                            Let's Talk <ArrowUpRight size={18} />
                        </a>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute top-20 left-0 w-full bg-[#030014]/95 backdrop-blur-3xl border border-purple-500/20 rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl"
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-semibold text-gray-300 hover:text-white"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;