import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const CertificateCard = ({ cert }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* 💳 الكارد الأساسي - الأبعاد مطابقة للصورة المطلوبة */}
            <div className="group relative rounded-md p-[1px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 transition-all duration-500 shadow-2xl overflow-hidden h-[300px] md:h-[244px]">

                {/* الحاوية الداخلية */}
                <div className="relative bg-[#0c0a21] h-full w-full p-2 rounded-md overflow-y-auto overflow-x-hidden scrollbar-hide">

                    {/* 🖼️ الصورة - بتملأ العرض والسكرول للـ Y فقط */}
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
                    />

                    {/* 🔍 Hover Overlay (يظهر عند الفوكس) */}
                    <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1.5px] cursor-pointer">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white/90 text-[#0c0a21] px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-xl"
                        >
                            <Maximize2 size={16} />
                            Full View
                        </motion.button>
                    </div>

                    {/* 🏷️ Badge (CERTIFICATE) - ثابت فوق الصورة */}
                    <div className="absolute top-3 right-3 pointer-events-none">
                        <div className="bg-[#0c0a21]/80 border border-white/10 px-2 py-1 rounded text-[9px] font-black text-white tracking-[0.2em] backdrop-blur-md">
                            CERTIFICATE
                        </div>
                    </div>
                </div>
            </div>

            {/* 🎥 المودال (عرض الصورة كاملة) */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* زر الإغلاق */}
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X size={35} />
                        </button>

                        {/* الصورة الكبيرة */}
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={cert.image}
                            alt="Full View"
                            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CSS لإخفاء السكرول بار تماماً */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </>
    );
};

export default CertificateCard;