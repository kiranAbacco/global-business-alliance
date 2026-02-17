import { useState, useEffect, useRef } from "react";
import {
    Bot, Send, X, Minimize2, Maximize2, Sparkles, User, MessageCircle,
    MessageSquare, MessageCircleQuestionMark
} from "lucide-react";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi 👋 I am GBA Assistant. Ask me anything!" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { from: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();
            setMessages(prev => [...prev, { from: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { from: "bot", text: "Sorry, I'm having trouble connecting. Please try again later." }]);
        } finally {
            setIsTyping(false);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Floating Assistant */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Helper bubble */}
                {!open && (
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg text-sm animate-bounce flex items-center gap-2 border border-gray-100">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Hi! I will help you 👋
                    </div>
                )}

                {/* Bot button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-white"
                >
                    <MessageCircle className="w-8 h-8" />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                </button>
            </div>

            {/* Chat Window */}
            {open && (
                <div className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden ${minimized ? 'h-14' : 'h-[500px]'}`}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <MessageCircleQuestionMark className="w-6 h-6" />
                                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="font-bold">GBA Assistant</h3>
                                <p className="text-xs opacity-90">Always here to help</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setMinimized(!minimized)}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                            >
                                {minimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className="p-1 hover:bg-white/20 rounded transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    {!minimized && (
                        <>
                            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                                <div className="space-y-3">
                                    {messages.map((m, i) => (
                                        <div
                                            key={i}
                                            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div className={`flex items-end gap-2 max-w-[80%] ${m.from === "user" ? "flex-row-reverse" : ""}`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.from === "user"
                                                    ? "bg-blue-100 ml-2"
                                                    : "bg-gray-200 mr-2"
                                                    }`}>
                                                    {m.from === "user"
                                                        ? <User className="w-4 h-4 text-blue-600" />
                                                        : <MessageSquare className="w-4 h-4 text-gray-600" />
                                                    }
                                                </div>
                                                <div className={`px-4 py-2 rounded-2xl ${m.from === "user"
                                                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-none"
                                                    : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                                                    }`}>
                                                    {m.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="flex items-end gap-2 max-w-[80%]">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 mr-2">
                                                    <message-circle className="w-4 h-4 text-gray-600" />
                                                </div>
                                                <div className="px-4 py-2 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white">
                                <div className="flex items-center gap-2">
                                    <input
                                        className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        placeholder="Type your message..."
                                        onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={!input.trim() || isTyping}
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Powered by GBA AI • Shift+Enter for new line
                                </p>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}