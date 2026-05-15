import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import AOS from "aos";

import "aos/dist/aos.css";



const Loader = () => {

    const [displayText, setDisplayText] = useState("");

    const fullText = "Omar Kamel";

    const typingSpeed = 160;



    useEffect(() => {

        AOS.init({ duration: 5000 });




        let i = 0;

        const timer = setInterval(() => {

            if (i < fullText.length) {

                setDisplayText(fullText.substring(0, i + 1));

                i++;

            } else {

                clearInterval(timer);

            }

        }, typingSpeed);



        return () => clearInterval(timer);

    }, []);



    const wordVariants = {

        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },

        visible: (i) => ({

            opacity: 1,

            y: 0,

            filter: "blur(0px)",

            transition: {

                delay: i * 0.1,

                duration: 0.6,

                ease: "easeOut",

            },

        }),

    };



    const line1 = "Welcome To My".split(" ");

    const line2 = "Portfolio Website".split(" ");



    return (

        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />

                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />

            </div>





            {/* 📊 Visualizer Bars */}

            <div className="flex items-end gap-2 mb-10 h-14">

                {[...Array(5)].map((_, i) => (

                    <motion.div

                        key={i}

                        animate={{ scaleY: [1, 2.2, 1] }}

                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}

                        className="w-2 md:w-2.5 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-full"

                        style={{ height: "40%", boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}

                    />

                ))}

            </div>



            <div className="text-center mb-12 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-[0.15em] flex justify-center gap-x-2 mb-2 uppercase">
                    {line1.map((word, i) => (
                        <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={wordVariants}>
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <h1 className="text-4xl md:text-6xl font-bold tracking-[0.05em] flex justify-center gap-x-3 uppercase">
                    {line2.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i + 3}
                            initial="hidden"
                            animate="visible"
                            variants={wordVariants}
                            className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-4"
                />
            </div>


            <div className="flex items-center gap-3 px-6 py-2 rounded-full ">

                <div className="relative flex h-2 w-2">

                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>

                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>

                </div>



                <div className="text-purple-400 font-mono text-md font-semibold tracking-[0.2em]">

                    {displayText}

                    <span className="animate-pulse inline-block ml-1 w-2 h-5 align-middle"></span>

                </div>

            </div>



            {/* Background Glow */}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />

        </div>

    );

};


export default Loader;