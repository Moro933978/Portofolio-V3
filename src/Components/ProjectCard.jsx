import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            // تأثير AOS يدوي باستخدام Framer Motion للطيران من أسفل
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            // تأثير الـ Hover (ارتفاع بسيط)
            whileHover={{ y: -8 }}

            className="group bg-[#161622]/60 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl relative p-5"
        >
            {/* 🖼️ حاوية الصورة - مع Padding داخلي زي الصورة بالظبط */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay خفيف */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a21]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* 📝 Content - نصوص أنحف ومساحات مريحة */}
            <div className="pt-6 px-2">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed line-clamp-2 mb-6 font-medium">
                    {project.desc}
                </p>

                {/* 🔗 Buttons - تصميم الأزرار المودرن */}
                <div className="flex items-center justify-between mt-auto">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                        Live Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>

                    <a
                        href={project.detailsLink}
                        className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-gray-200 hover:bg-white/10 hover:border-purple-500/50 transition-all shadow-lg"
                    >
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                </div>
            </div>

            {/* توهج بنفسجي خفي بيظهر في الخلفية عند الهوفر */}
            <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
        </motion.div>
    );
};

export default ProjectCard;