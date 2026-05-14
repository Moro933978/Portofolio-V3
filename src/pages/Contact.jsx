import { useState } from "react";
import { Send } from "lucide-react";

const AIContact = () => {
    const [messages, setMessages] = useState([
        { role: "ai", text: "Hi 👋 I'm Omar's AI assistant. How can I help you?" }
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const fakeAIResponse = (userMsg) => {
        setTyping(true);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: "Got it! Omar will review your message and get back to you soon 🚀"
                }
            ]);
            setTyping(false);
        }, 1200);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const newMsg = { role: "user", text: input };

        setMessages((prev) => [...prev, newMsg]);
        setInput("");

        fakeAIResponse(input);
    };

    return (
        <section className="py-32 flex justify-center items-center">
            <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                {/* Chat */}
                <div className="h-[400px] overflow-y-auto space-y-4 mb-4 pr-2">

                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm
                                ${msg.role === "user"
                                        ? "bg-purple-600 text-white"
                                        : "bg-white/10 text-gray-300"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {typing && (
                        <div className="text-gray-400 text-sm">AI is typing...</div>
                    )}

                </div>

                {/* Input */}
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                    />

                    <button
                        onClick={handleSend}
                        className="px-4 bg-purple-600 rounded-xl text-white flex items-center justify-center hover:bg-purple-500 transition"
                    >
                        <Send size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AIContact;