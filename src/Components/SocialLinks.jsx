import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const SocialLinks = () => {
    const socials = [
        { Icon: GithubIcon, url: "https://github.com/Moro933978", label: "Github" },
        { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/omar-mahmoud-ab182035a/", label: "Linkedin" },
        { Icon: InstagramIcon, url: "https://www.instagram.com/omarkamel757/", label: "Instagram" },
    ];

    return (
        <div className="flex items-center gap-5 py-1" >
            {socials.map(({ Icon, url, label }, index) => (
                <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}

                    className="
                    group relative flex items-center justify-center p-3 rounded-full backdrop-blur-xl
                    /*  SIZE */
                    w-12 h-12
                    

                    /* GLASS */
                    bg-white/5 border border-white/10

                    /* BASE SHADOW */
                    shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]

                    /*  HOVER (NO SCALE) */
                    hover:border-purple-500/40
                    hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]

                    transition-all duration-300
                    "
                >

                    {/*  INNER GLOW (controlled) */}
                    <div className="
                        absolute inset-0 rounded-2xl
                        bg-gradient-to-br from-purple-500/10 to-blue-500/10
                        opacity-0 group-hover:opacity-100
                        transition duration-300
                    " />

                    {/* ICON */}
                    <div className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                        <Icon />
                    </div>

                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;