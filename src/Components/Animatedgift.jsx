import React from "react";
import { motion } from "framer-motion";

const Orb = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">

            <motion.div
                className="w-[320px] md:w-[520px]" // كبرناها سنة
                initial={{ rotate: 0 }}
                whileHover={{
                    scale: 1.08,        // تكبير
                    rotate: 5           // روتيشن خفيف
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 10
                }}
            >
                <svg viewBox="0 0 600 600" className="w-full">

                    <defs>
                        <radialGradient id="glow" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#000" stopOpacity="0" />
                        </radialGradient>

                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>

                    {/* glow */}
                    <circle cx="300" cy="300" r="220" fill="url(#glow)" className="animate-pulse" />

                    {/* core */}
                    <circle
                        cx="300"
                        cy="300"
                        r="180"
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="2"
                        opacity="0.8"
                    />

                    {/* orbit lines */}
                    {[...Array(8)].map((_, i) => (
                        <ellipse
                            key={i}
                            cx="300"
                            cy="300"
                            rx="180"
                            ry="70"
                            fill="none"
                            stroke="url(#lineGrad)"
                            strokeWidth="1.2"
                            opacity="0.5"
                            className="orbit"
                            style={{
                                transform: `rotate(${i * 22.5}deg)`,
                                transformOrigin: "center",
                                animationDuration: `${8 + i}s`
                            }}
                        />
                    ))}

                    {/* dots */}
                    {[...Array(60)].map((_, i) => {
                        const angle = (i / 60) * Math.PI * 2;
                        const r = 170;
                        return (
                            <circle
                                key={i}
                                cx={300 + Math.cos(angle) * r}
                                cy={300 + Math.sin(angle) * r}
                                r="1.8"
                                fill="#a855f7"
                                opacity="0.7"
                                className="pulse"
                            />
                        );
                    })}

                    {/* text */}
                    <text
                        x="300"
                        y="320"
                        textAnchor="middle"
                        fill="white"
                        fontSize="60"
                        fontWeight="bold"
                    >
                        OM
                    </text>

                </svg>
            </motion.div>
        </div>
    );
};

export default Orb;