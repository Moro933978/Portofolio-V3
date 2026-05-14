import React, { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db, storage } from "../firebase";
import { collection, onSnapshot, orderBy, query, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ContactAndComments() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [comments, setComments] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: 'ease-out-back'
        });

        if (!db) return;

        const q = query(
            collection(db, "comments"),
            orderBy("createdAt", "desc")
        );

        const unsub = onSnapshot(q,
            (snapshot) => {
                const fetchedComments = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setComments(fetchedComments);
            },
            (error) => {
                console.error("Firebase Error:", error.message);
            }
        );

        return () => unsub();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);
        try {
            let imageUrl = "";
            if (image) {
                const imageRef = ref(storage, `comments/${Date.now()}-${image.name}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }
            await addDoc(collection(db, "comments"), {
                name, text, imageUrl, isPinned: false, createdAt: serverTimestamp(),
            });
            setName(""); setText(""); setImage(null); setImagePreview(null);
        } catch (error) { console.error(error); }
        finally { setIsUploading(false); }
    };

    const pinnedComment = comments.find(c => c.isPinned);
    const normalComments = comments.filter(c => !c.isPinned);

    return (
        <div className="min-h-screen text-white p-4 lg:p-12 relative overflow-x-hidden" id="contact">

            <div className="max-w-6xl mx-auto mb-16 text-center" data-aos="fade-down">
                <span className="text-purple-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">Get in touch</span>
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent tracking-tight">
                    CONTACT & <span className="text-purple-500">FEEDBACK</span>
                </h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Have a project in mind or a fresh idea? Let's connect! I’m always open to new challenges and ready to help you build something great."                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                <div className="lg:col-span-4 space-y-6 backdrop-blur-xl
                " data-aos="fade-right">
                    <div className="bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]">
                        <h2 className="text-3xl font-bold mb-6 text-purple-400">Information</h2>

                        <div className="grid grid-cols-1 gap-3 mb-8">
                            {/* LinkedIn */}
                            <SocialCard
                                color="text-[#0077b5]"
                                title="LinkedIn"
                                url="https://www.linkedin.com/in/omar-mahmoud-ab182035a/" // حط لينك حسابك هنا
                                icon={<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                            />

                            {/* GitHub & Instagram Row */}
                            <div className="grid grid-cols-2 gap-3">
                                <SocialCard
                                    color="text-white"
                                    title="GitHub"
                                    url="https://github.com/Moro933978"
                                    icon={<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />}
                                />
                                <SocialCard
                                    color="text-[#e4405f]"
                                    title="Instagram"
                                    url="https://www.instagram.com/omarkamel757/"
                                    icon={<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                                />
                            </div>

                            {/* Email */}
                            <SocialCard
                                color="text-purple-400"
                                title="Email"
                                url="mailto:omar6789123h@gmail.com" // لينك الإيميل بيبدأ بـ mailto
                                icon={<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
                            />
                        </div>

                        <span className="text-purple-500 font-bold text-[10px] tracking-[0.2em] uppercase">Let's Connect</span>
                        <h4 className="text-white font-medium mt-4 text-sm leading-relaxed">
                            Have a project in mind?<br />
                            <span className="text-gray-500">Let's build something amazing together.</span>
                        </h4>
                        <div className="mt-6 p-[1.5px] bg-gradient-to-r from-purple-500/40 via-purple-500/10 to-transparent rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                            <div className="bg-[#0b031a] rounded-2xl p-4 flex items-center gap-4 border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-gray-200 tracking-wide truncate">omar6789123h@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl relative" data-aos="fade-left">

                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-widest text-purple-100 ">Discussion</h3>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                            <span className="text-purple-400 font-bold text-sm">{comments.length}</span>
                            <span className="text-[9px] text-gray-400 uppercase tracking-tighter">Comments</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-10" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="bg-[#160a2c] border border-purple-500/10 rounded-xl py-3 px-4 outline-none focus:border-purple-500 transition-all text-sm" />
                            <div className="relative group">
                                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
                                <div onClick={() => fileInputRef.current.click()} className="h-full bg-[#160a2c] border border-purple-500/10 border-dashed rounded-xl px-4 flex items-center justify-center cursor-pointer hover:border-purple-500/40 transition-all">
                                    {imagePreview ?
                                        <div className="flex items-center gap-2"><img src={imagePreview} className="w-6 h-6 rounded-full object-cover border border-purple-500" /><span className="text-[10px] text-purple-400">Ready</span></div> :
                                        <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span className="text-[11px]">Photo</span></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} required rows="2" placeholder="Write your message..." className="w-full bg-[#160a2c] border border-purple-500/10 rounded-xl py-3 px-4 outline-none focus:border-purple-500 transition-all text-sm" />
                        <button disabled={isUploading} className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all uppercase tracking-[0.2em] text-[10px]">
                            {isUploading ? "Uploading..." : "Post Comment"}
                        </button>
                    </form>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar ">
                        {pinnedComment && (
                            <div className="p-5 rounded-2xl border transition-all bg-purple-600/10 border-purple-500/50 sticky top-0 z-20 backdrop-blur-xl shadow-xl">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center overflow-hidden">
                                        {pinnedComment.imageUrl
                                            ? <img src={pinnedComment.imageUrl} className="w-full h-full object-cover" />
                                            : <span className="text-purple-400 font-bold text-xs">{pinnedComment.name?.charAt(0).toUpperCase()}</span>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-xs font-bold text-purple-100 truncate">{pinnedComment.name}</h4>
                                            <span className="text-[8px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/30">PINNED</span>
                                        </div>
                                        <p className="text-gray-400 text-[13px] leading-relaxed break-words">{pinnedComment.text}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {normalComments.map((c, index) => (
                            <div key={c.id} data-aos="fade-up" data-aos-delay={index * 50} className="p-5 rounded-2xl border transition-all bg-[#160a2c]/30 border-white/5 hover:border-purple-500/20">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center overflow-hidden">
                                        {c.imageUrl
                                            ? <img src={c.imageUrl} className="w-full h-full object-cover" />
                                            : <span className="text-purple-400 font-bold text-xs">{c.name?.charAt(0).toUpperCase()}</span>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-xs font-bold text-purple-100 truncate mb-1">{c.name}</h4>
                                        <p className="text-gray-400 text-[13px] leading-relaxed break-words">{c.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialCard({ color, title, icon, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#160a2c]/40 border border-white/5 p-3.5 rounded-2xl flex items-center gap-3.5 hover:bg-white/10 transition-all cursor-pointer group"
        >
            <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${color}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
            </div>
            <span className="text-[11px] font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">{title}</span>
        </a>
    );
}