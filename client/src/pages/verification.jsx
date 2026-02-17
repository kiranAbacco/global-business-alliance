import { ShieldCheck, Lock, Eye, FileCheck, Globe, Users, AlertCircle, CheckCircle, Award, Zap } from "lucide-react";

export default function Verification() {
    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-blue-50/20 min-h-screen relative overflow-hidden">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Archivo+Black&display=swap');
                
                * {
                    font-family: 'Manrope', sans-serif;
                }
                
                .font-display {
                    font-family: 'Archivo Black', sans-serif;
                    letter-spacing: -0.03em;
                }

                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }

                .animate-float-gentle {
                    animation: float-gentle 8s ease-in-out infinite;
                }

                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease infinite;
                }

                @keyframes shimmer-sweep {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) rotate(45deg); }
                }

                .shimmer-card {
                    position: relative;
                    overflow: hidden;
                }

                .shimmer-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(
                        45deg,
                        transparent,
                        rgba(59, 130, 246, 0.15),
                        transparent
                    );
                    transform: translateX(-100%) rotate(45deg);
                    transition: transform 0.8s;
                }

                .shimmer-card:hover::before {
                    transform: translateX(100%) rotate(45deg);
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out;
                }

                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
                }

                .pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .card-hover-lift {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .card-hover-lift:hover {
                    transform: translateY(-8px) scale(1.01);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }

                @keyframes check-bounce {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                .animate-check-bounce {
                    animation: check-bounce 2s ease-in-out infinite;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .bg-mesh-gradient {
                    background: 
                        radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.25) 0px, transparent 50%),
                        radial-gradient(at 97% 21%, hsla(215, 98%, 71%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 52% 99%, hsla(215, 98%, 61%, 0.15) 0px, transparent 50%),
                        radial-gradient(at 10% 29%, hsla(215, 96%, 67%, 0.25) 0px, transparent 50%);
                }

                .slit-light {
                    position: relative;
                    overflow: hidden;
                }

                .slit-light::before {
                    content: '';
                    position: absolute;
                    top: -100%;
                    left: -100%;
                    width: 300%;
                    height: 300%;
                    background: linear-gradient(
                        45deg,
                        transparent 30%,
                        rgba(255, 255, 255, 0.1) 50%,
                        transparent 70%
                    );
                    transform: rotate(45deg) translateX(-100%);
                    transition: transform 0.6s ease;
                }

                .slit-light:hover::before {
                    transform: rotate(45deg) translateX(100%);
                }

                .slit-beam {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
                    transform: rotate(45deg);
                    left: 50%;
                    transform-origin: center;
                }
            `}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-gentle"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* HEADER */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>


                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float-gentle"></div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-up">
                        <ShieldCheck className="w-5 h-5 text-blue-300" />
                        <span className="text-sm font-bold text-blue-100">Trusted Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                            Verification & Trust
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Global Business Alliance is built on trust. Every listed company is
                        reviewed to ensure credibility, data protection, and spam-free
                        communication.
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <CheckCircle className="w-5 h-5 text-blue-300" />
                            <span className="text-sm font-semibold">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <Lock className="w-5 h-5 text-blue-300" />
                            <span className="text-sm font-semibold">Secure Platform</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <Award className="w-5 h-5 text-blue-300" />
                            <span className="text-sm font-semibold">Verified Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-4 py-24 space-y-12 relative z-10">
                {/* VERIFICATION PROCESS */}
                <div className="glass-card rounded-3xl p-10 shadow-2xl border-white/50 shimmer-card card-hover-lift animate-slide-up slit-light">

                    <div className="flex items-start gap-5 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg pulse-glow flex-shrink-0">
                            <FileCheck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                How We Verify Companies
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every business listed on Global Business Alliance goes through a
                                structured verification process to ensure authenticity and trust.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Business registration and company details review</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Official website and domain validation</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Industry relevance and legitimacy check</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Manual approval by our admin team</span>
                        </div>
                    </div>
                </div>

                {/* DATA PRIVACY */}
                <div className="glass-card rounded-3xl p-10 shadow-2xl border-white/50 shimmer-card card-hover-lift animate-slide-up slit-light" style={{ animationDelay: '0.1s' }}>

                    <div className="flex items-start gap-5 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg pulse-glow flex-shrink-0">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                Data Privacy & Protection
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We take data privacy seriously and follow strict policies to protect
                                both businesses and users on our platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">No public display of email addresses</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Secure contact forms to prevent scraping</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Data used only for intended business communication</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">No selling of personal or business data</span>
                        </div>
                    </div>
                </div>

                {/* ANTI-SPAM */}
                <div className="glass-card rounded-3xl p-10 shadow-2xl border-white/50 shimmer-card card-hover-lift animate-slide-up slit-light" style={{ animationDelay: '0.2s' }}>

                    <div className="flex items-start gap-5 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl shadow-lg pulse-glow flex-shrink-0">
                            <AlertCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                Anti-Spam Policy
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Global Business Alliance is a spam-free B2B platform focused on
                                meaningful business connections.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Inquiry-based contact only</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">No bulk messaging or unsolicited outreach</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Monitoring and suspension of abusive accounts</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">User reporting and moderation system</span>
                        </div>
                    </div>
                </div>

                {/* COMPLIANCE */}
                <div className="glass-card rounded-3xl p-10 shadow-2xl border-white/50 shimmer-card card-hover-lift animate-slide-up slit-light" style={{ animationDelay: '0.3s' }}>

                    <div className="flex items-start gap-5 mb-6">
                        <div className="p-4 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-lg pulse-glow flex-shrink-0">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                Legal Compliance
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We comply with global data protection and communication regulations.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">GDPR compliant (EU)</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">CAN-SPAM compliant (US)</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <FileCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Transparent data usage policies</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all group slit-light">
                            <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 font-medium">Opt-in based communication</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
                <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>



                {/* Animated elements */}
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-gentle"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float-gentle"></div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                        <Award className="w-5 h-5 text-blue-300" />
                        <span className="text-sm font-bold text-blue-100">Join Verified Network</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
                        Build Trust. Grow Your Business.
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join a verified global B2B network trusted by businesses worldwide.
                    </p>

                    <a
                        href="/pricing"
                        className="group relative inline-flex items-center gap-3 bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden slit-light"
                    >
                        <span className="relative z-10">List Your Business</span>
                        <Zap className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-8 mt-16 text-white">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">10K+</div>
                            <div className="text-sm text-blue-200">Verified Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">150+</div>
                            <div className="text-sm text-blue-200">Countries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">100%</div>
                            <div className="text-sm text-blue-200">Secure</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">24/7</div>
                            <div className="text-sm text-blue-200">Support</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}