// import React, { useEffect, useRef, useState, memo } from "react"
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const AnimatedBackground = memo(() => {
//     const blobRefs = useRef([])
//     const [init, setInit] = useState(false);

//     const initialPositions = [
//         { x: -4, y: 0 },
//         { x: -4, y: 0 },
//         { x: 20, y: -8 },
//         { x: 20, y: -8 },
//     ]

//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             const newScroll = window.pageYOffset;

//             blobRefs.current.forEach((blob, index) => {
//                 if (!blob) return;
//                 const initialPos = initialPositions[index];

//                 const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
//                 const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;

//                 const x = initialPos.x + xOffset;
//                 const y = initialPos.y + yOffset;

//                 blob.style.transform = `translate(${x}px, ${y}px)`;
//                 blob.style.transition = "transform 1.4s ease-out";
//             })
//         }

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const particlesOptions = {
//         fpsLimit: 60,
//         particles: {
//             color: { value: "#cc00ff" },
//             links: {
//                 color: "#bd4683",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.2,
//                 width: 1,
//             },
//             move: {
//                 enable: true,
//                 speed: 0.8,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 outModes: { default: "out" },
//             },
//             number: {
//                 density: { enable: true, area: 800 },
//                 value: 100,
//             },
//             opacity: { value: 0.3 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 2 } },
//         },
//         interactivity: {
//             events: {
//                 onHover: { enable: true, mode: "grab" },
//             },
//             modes: {
//                 grab: { distance: 200, links: { opacity: 0.5 } },
//             },
//         },
//         detectRetina: true,
//     };

//     return (
//         <div className="fixed inset-0 overflow-hidden">
//             {init && (
//                 <Particles
//                     id="tsparticles"
//                     options={particlesOptions}
//                     className="absolute inset-0 z-0 blur-[1.5px] opacity-50 pointer-events-none" />
//             )}

//             <div className="absolute inset-0">
//                 <div
//                     ref={(ref) => (blobRefs.current[0] = ref)}
//                     className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "></div>
//                 <div
//                     ref={(ref) => (blobRefs.current[1] = ref)}
//                     className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
//                 <div
//                     ref={(ref) => (blobRefs.current[2] = ref)}
//                     className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "></div>
//                 <div
//                     ref={(ref) => (blobRefs.current[3] = ref)}
//                     className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
//             </div>

//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//         </div>
//     )
// })

// export default AnimatedBackground


import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
    const blobRefs = useRef([])
    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ]

    useEffect(() => {
        let currentScroll = 0
        let requestId

        const handleScroll = () => {
            const newScroll = window.pageYOffset
            const scrollDelta = newScroll - currentScroll
            currentScroll = newScroll

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index]

                // Calculating movement in both X and Y direction
                const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340 // Horizontal movement
                const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40 // Vertical movement

                const x = initialPos.x + xOffset
                const y = initialPos.y + yOffset

                // Apply transformation with smooth transition
                blob.style.transform = `translate(${x}px, ${y}px)`
                blob.style.transition = "transform 1.4s ease-out"
            })

            requestId = requestAnimationFrame(handleScroll)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            cancelAnimationFrame(requestId)
        }
    }, [])

    return (
        <div className="fixed inset-0 ">
            <div className="absolute inset-0">
                <div
                    ref={(ref) => (blobRefs.current[0] = ref)}
                    className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "></div>
                <div
                    ref={(ref) => (blobRefs.current[1] = ref)}
                    className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
                <div
                    ref={(ref) => (blobRefs.current[2] = ref)}
                    className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 "></div>
                <div
                    ref={(ref) => (blobRefs.current[3] = ref)}
                    className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
    )
}

export default AnimatedBackground
