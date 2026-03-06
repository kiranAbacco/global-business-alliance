import { useState } from "react";
import { CheckCircle, ShieldCheck, Lock, Sparkles, ArrowRight, Mail } from "lucide-react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
export default function JoinGBA() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const sendMagicLink = async () => {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/api/auth/magic-link`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);   // shows "User already registered"
        } else {
            alert("Magic link sent to your email");
        }
        setIsLoading(false);
    };

    return (
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden bg-white">

            {/* LEFT PANEL */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 bg-gray-50 relative z-10 overflow-y-auto">

                <div className="max-w-md mx-auto w-full space-y-6">

                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/photos/logo1.png"
                            className="w-10 h-10"
                            alt="GBA Logo"
                        />
                        <h2 className="text-lg font-semibold text-gray-900">
                            Global Business Alliance
                        </h2>
                    </div>

                    {/* Heading Section */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">Exclusive Membership</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-900">
                            Join GBA and become a member
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed">
                            Your application will be linked to your email. Start your journey with the world's leading business network.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="space-y-4 pt-2">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                Your email address
                            </label>

                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="you@company.com"
                                    className="border border-gray-300 rounded-lg px-4 py-3 w-full font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                            </div>
                        </div>

                        <button
                            onClick={sendMagicLink}
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send magic link
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
                                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <span className="text-xs font-medium text-gray-700">Verified</span>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                            </div>
                            <span className="text-xs font-medium text-gray-700">Secure</span>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                            <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center">
                                <Lock className="w-3.5 h-3.5 text-purple-10" />
                            </div>
                            <span className="text-xs font-medium text-gray-700">GDPR</span>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="pt-2">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            By joining, you agree to our terms of service and privacy policy. We'll send you a secure magic link to verify your email address.
                        </p>
                    </div>

                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden md:block group">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent z-10"></div>

                {/* Glass card overlay */}
                <div className="absolute bottom-10 right-10 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-xs border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm">Join 10,000+ Members</h3>
                            <p className="text-xs text-gray-600 mt-1">Expanding business networks worldwide</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 self-center">+10K more</span>
                    </div>
                </div>

                <img
                    src="/images/img10.jpg"
                    className="w-full h-full object-cover"
                    alt="Join GBA"
                />
            </div>

        </div>
    );
}