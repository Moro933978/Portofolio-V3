import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SVGIcon = {
    ArrowLeft: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
    ),
    ExternalLink: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
    ),
    Github: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    ),
    Star: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    ),
    Code2: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
    ),
    Layers: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.83 6.18a2 2 0 0 0 0 3.64l8.34 4a2 2 0 0 0 1.66 0l8.34-4a2 2 0 0 0 0-3.64Z" /><path d="m3.6 13.6 7.74 3.72a2 2 0 0 0 1.32 0l7.74-3.72" /><path d="m3.6 18.6 7.74 3.72a2 2 0 0 0 1.32 0l7.74-3.72" /></svg>
    ),
    Cpu: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
    )
};

const projects = [
    {
        id: 1,
        title: "Gostar Gamming Chanel",
        image: "/Gostar.jpeg",
        desc: "The ultimate digital arena where football passion meets elite gaming. This platform delivers high-octane commentary, tactical deep-dives into the latest football simulators, and a cinematic viewing experience for a global audience. Engineered for seamless interaction and community growth.", features: [
            "Menghadirkan informasi komprehensif tentang PIK-R",
            "Menampilkan deretan prestasi sebagai bentuk pencapaian",
            "Memperkenalkan susunan kepengurusan sebagai wajah organisasi"
        ],
        tech: ["React.js", "Tailwind CSS", "Framer Motion", "Firebase", "Aos"],
        stats: { techCount: 5, featuresCount: 3 },
        features: ["Bespoke Visual Identity.", "Scalable Media Architecture.", "Watch Football News And Streems."],
        liveLink: "#", githubLink: "https://github.com/Moro933978"
    },

    {
        id: 2,
        title: "Simple Audio Player",
        image: "/Screenshot (155).png",
        desc: "Professional audio playing application with modern UI controls.",
        features: ["Play/Pause functionality.", "Playlist management.", "Volume control."],
        tech: ["HTML", "CSS", "JavaScript"],
        stats: { techCount: 3, featuresCount: 3 },
        liveLink: "#", githubLink: "https://github.com/Moro933978"
    },

    {
        id: 3,
        title: "Gostar Gamming Portofolio",
        image: "/Screenshot (153).png",
        desc: "Professional Website For Gostar Gamming In Compitition for the best design.",
        features: ["For the best Design. ", "For Montair.", "Degital Criator."],
        tech: ["HTML", "CSS", "JavaScript"],
        stats: { techCount: 3, featuresCount: 3 },
        liveLink: "#", githubLink: "https://github.com/Moro933978"
    },

    {
        id: 4,
        title: "Crop-Care Ai",
        image: "/Screenshot (154).png",
        desc: "An advanced AgTech solution leveraging Convolutional Neural Networks (CNN) to revolutionize precision agriculture. By processing real-time biological data through sophisticated diagnostic models, this platform empowers sustainable farming practices with predictive analytics. It transforms complex environmental data into actionable decision intelligence, maximizing crop yield efficiency on a global scale.",
        features: ["Plant Desise Detect.", "Climate Change Protection. ", "Help Farmers To Grow Up.", "Soli Protection For Plants."],
        tech: ["React", "Tailwind CSS", "Node", "Dashboards"],
        stats: { techCount: 4, featuresCount: 4 },
        liveLink: "#", githubLink: "https://github.com/Moro933978"
    },

    {
        id: 5,
        title: "Crop-Care With PY",
        image: "/CAi.png",
        desc: "An early-stage Python prototype designed to validate the core logic of Crop Care AI. This MVP acted as a foundational experiment to explore neural network architectures and plant pathology detection. Please note that this is a non-production version created strictly for research and feasibility testing during the initial development phase of the main project.",
        features: ["Core Logic Test. ", "Basic Image Loading. ", "Experimental Data.", "Simple Output.", "Early Prototype."],
        tech: ["Python"],
        stats: { techCount: 1, featuresCount: 5 },
        liveLink: "#", githubLink: "https://github.com/Moro933978"
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => String(p.id) === String(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">Project Not Found!</h2>
                <button onClick={() => navigate('/')} className="px-6 py-2 bg-purple-600 rounded-xl">Back to Home</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030014] text-white pb-20 relative overflow-hidden flex items-center justify-center
        ">
            {/* --- الخلفية المتوهجة (Blobs & Net) --- */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div
                    className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-35  "></div>
                <div
                    className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30  hidden sm:block"></div>
                <div
                    className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-[#FF2E63] rounded-full mix-blend-multiply filter blur-[128px] opacity-30  "></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-10  relative z-10">
                {/* --- Header --- */}
                <div className="flex items-center justify-between mb-12">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-md">
                        <div className="group-hover:-translate-x-1 transition-transform"><SVGIcon.ArrowLeft /></div>
                        <span className="text-sm font-semibold">Back</span>
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-tight">
                        Projects <span className="opacity-30">/</span> <span className="text-purple-400">{project.title}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- العمود الأيسر: المعلومات --- */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-1xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                                {project.title}
                            </h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                        </div>

                        <p className="text-gray-400 text-lg text-justify leading-relaxed max-w-2xl font-medium">{project.desc}</p>

                        {/* الكروت الصغيرة للـ Stats */}
                        {/* الكروت الصغيرة للـ Stats - الحفاظ على شكل الدائرة في الموبايل */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
                            {/* Card 1: Total Tech */}
                            <div className="bg-[#161622]/50 border border-white/5 p-3 sm:p-5 rounded-2xl backdrop-blur-xl flex items-center gap-3 sm:gap-4 transition-all hover:border-purple-500/20 group">
                                {/* الدائرة - تم تثبيتها بـ shrink-0 و aspect-square */}
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform aspect-square">
                                    <SVGIcon.Cpu />
                                </div>
                                <div className="min-w-0"> {/* منع الكلام إنه يزق الدائرة */}
                                    <div className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-none">
                                        {project.stats?.techCount || 0}
                                    </div>
                                    <div className="text-[8px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">
                                        Tech
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Main Features */}
                            <div className="bg-[#161622]/50 border border-white/5 p-3 sm:p-5 rounded-2xl backdrop-blur-xl flex items-center gap-3 sm:gap-4 transition-all hover:border-cyan-500/20 group">
                                {/* الدائرة - تم تثبيتها بـ shrink-0 و aspect-square */}
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform aspect-square">
                                    <SVGIcon.Layers />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-none">
                                        {project.stats?.featuresCount || 0}
                                    </div>
                                    <div className="text-[8px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">
                                        Features
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* أزرار الأكشن - متوازنة الحجم + Glass Hover + Animated Border */}
                        <div className="flex flex-nowrap items-center gap-3 sm:gap-6 pt-4 overflow-x-auto no-scrollbar">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group inline-block p-[1.5px] rounded-2xl overflow-hidden transition-all duration-500 active:scale-95 "
                            >
                                {/* 🔥 البوردر المتحرك */}
                                <div className="absolute inset-[-1000%] animate-border-spin bg-white/50000 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* 🔥 طبقة الجلاس الأساسية */}
                                <div className="relative flex items-center justify-center gap-3 px-6 sm:px-10 py-3 sm:py-3.5 bg-[#030014]/90 backdrop-blur-3xl rounded-[15px] text-white transition-all duration-300 group-hover:bg-white/10 whitespace-nowrap">

                                    <div className="group-hover:text-cyan-400 transition-colors duration-300">
                                        <SVGIcon.ExternalLink />
                                    </div>

                                    <span className="text-sm sm:text-base font-bold tracking-wide bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-400 transition-all duration-500">
                                        Live Demo
                                    </span>

                                    {/* 🔥 اللمعة الداخلية (Glass Effect) */}
                                    <div className="absolute inset-0 rounded-[15px] border border-white/10 pointer-events-none group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300"></div>

                                    {/* تأثير المسح الضوئي عند الهوفر */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </a>

                            {/* زرار جيت هاب - متناسق مع الحجم الجديد */}
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-6 sm:px-10 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-all text-gray-200 active:scale-95 text-sm sm:text-base whitespace-nowrap backdrop-blur-md"
                            >
                                <SVGIcon.Github />
                                Github
                            </a>
                        </div>

                        {/* التكنولوجيا المستخدمة */}
                        <div className="pt-10 border-t border-white/5">
                            <h3 className="text-gray-500 uppercase tracking-[0.4em] text-[11px] mb-6 font-bold flex items-center gap-2">
                                <span className="w-6 h-[1px] bg-gray-500"></span> Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech?.map((t, index) => (
                                    <span key={index} className="px-5 py-2.5 bg-purple-500/5 border border-purple-500/10 rounded-xl text-purple-300 text-sm flex items-center gap-2 font-semibold hover:bg-purple-500/10 transition-colors">
                                        <SVGIcon.Code2 /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2.5rem] blur opacity-15 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#161622]/60 backdrop-blur-md shadow-2xl">
                                <img src={project.image} alt={project.title} className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/30 via-black/40 to-transparent">
                                    <h2 className="text-xl font-bold text-gray-200 tracking-tight">{project.title} Preview</h2>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#161622]/50 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors duration-500"></div>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                                <SVGIcon.Star className="text-yellow-500 fill-yellow-500/20" />
                                <h3 className="text-xl font-bold text-white/90 tracking-tight">Key Features</h3>
                            </div>
                            <ul className="space-y-6">
                                {project.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-400 group/item">
                                        <div className="mt-2.5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,1)] group-hover/item:scale-125 transition-all duration-300"></div>
                                        <span className="text-[15px] leading-relaxed group-hover/item:text-white transition-colors font-medium">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;