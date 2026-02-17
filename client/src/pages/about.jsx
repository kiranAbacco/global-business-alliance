import { Globe, ShieldCheck, Users } from "lucide-react";
import { Target, Rocket, CheckCircle } from "lucide-react";
import {
    Briefcase,
    BadgeCheck,
    Search,
    Megaphone,
    BarChart3,
    Mail,
    Plug
} from "lucide-react";
import {
    Globe2,
    Building2,
    Factory,
    Truck,
    Ship,
    Laptop,
    Stethoscope
} from "lucide-react";

export default function About() {
    return (
        <div className="w-full text-gray-800">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cal+Sans:wght@600&display=swap');
                
                * {
                    font-family: 'Inter', sans-serif;
                }
                
                .font-display {
                    font-family: 'Cal Sans', sans-serif;
                    letter-spacing: -0.02em;
                }

                @keyframes float-up-down {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .animate-float-slow {
                    animation: float-up-down 6s ease-in-out infinite;
                }

                @keyframes gradient-flow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-gradient-flow {
                    background-size: 200% 200%;
                    animation: gradient-flow 8s ease infinite;
                }

                @keyframes shimmer-sweep {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
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
                        rgba(255, 255, 255, 0.1),
                        transparent
                    );
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.6s;
                }

                .shimmer-card:hover::before {
                    transform: translateX(100%) translateY(100%) rotate(45deg);
                }

                @keyframes slide-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-in-up {
                    animation: slide-in-up 0.8s ease-out;
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .card-hover-lift {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .card-hover-lift:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                }

                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
                }

                .pulse-border {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .bg-mesh-gradient {
                    background: 
                        radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
                        radial-gradient(at 97% 21%, hsla(215, 98%, 61%, 0.2) 0px, transparent 50%),
                        radial-gradient(at 52% 99%, hsla(215, 98%, 61%, 0.2) 0px, transparent 50%),
                        radial-gradient(at 10% 29%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
                        radial-gradient(at 97% 96%, hsla(215, 98%, 61%, 0.2) 0px, transparent 50%),
                        radial-gradient(at 33% 50%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
                        radial-gradient(at 79% 53%, hsla(215, 98%, 61%, 0.2) 0px, transparent 50%);
                }

                .slit-light {
                    position: relative;
                    overflow: hidden;
                }

                .slit-light::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100px;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    transform: skewX(-25deg);
                    transition: left 1.5s;
                }

                .slit-light:hover::after {
                    left: 100%;
                }
            `}</style>

            {/* HERO / INTRO */}
            <section
                className="relative bg-cover bg-center text-white py-32 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-95"></div>

                {/* Animated gradient orbs */}
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>

                {/* Slit light effect */}

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-in-up">
                        <Globe className="w-5 h-5 text-blue-300" />
                        <span className="text-sm font-semibold text-blue-100">Global Network</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            About Global Business Alliance
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-medium leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        A global B2B networking and business growth platform connecting companies across borders.
                    </p>
                </div>
            </section>



            {/* ABOUT DESCRIPTION */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>

                {/* Slit light effect */}

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                    {/* TEXT */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-bold text-blue-700">Our Story</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                            Connecting Businesses
                            <span className="text-gradient"> Worldwide</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Global Business Alliance is a global B2B networking and business growth platform
                            built to connect companies, professionals, and decision-makers across industries
                            and international borders.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            Our platform enables verified businesses to discover new partners,
                            expand into global markets, and build long-term, trusted relationships.
                        </p>

                        <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200/50">
                            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                            <p className="text-lg font-semibold text-gray-900">
                                Make global business connections easy, trusted, and scalable.
                            </p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <img
                            src="/images/img9.avif"
                            alt="Business Collaboration"
                            className="relative rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                </div>
            </section>


            {/* VISION & MISSION */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
                </div>

                {/* Slit light effect */}


                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-10">

                    {/* VISION */}
                    <div className="glass-effect rounded-3xl p-8 shadow-2xl shimmer-card card-hover-lift border-white/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-black">
                                Our Vision
                            </h2>
                        </div>

                        <p className="text-lg text-black leading-relaxed mb-6">
                            To become the world’s most trusted and intelligent global B2B business network —
                            a platform where credibility, transparency, and opportunity converge to unlock
                            limitless growth for enterprises everywhere.
                        </p>

                        <p className="text-lg text-black leading-relaxed mb-6">
                            We envision a future where businesses of all sizes — from emerging startups to
                            multinational corporations — can seamlessly discover verified partners, evaluate
                            opportunities with confidence, and build sustainable commercial relationships
                            across borders.
                        </p>

                        <p className="text-lg text-black leading-relaxed">
                            By leveraging verified data, smart technology, and ethical networking standards,
                            we aim to remove barriers in global trade and create a transparent, data-driven
                            ecosystem that fuels innovation, collaboration, and long-term business success.
                        </p>
                    </div>


                    {/* MISSION */}
                    <div className="glass-effect rounded-3xl p-8 shadow-2xl shimmer-card card-hover-lift border-white/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
                                <Rocket className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-black">
                                Our Mission
                            </h2>
                        </div>

                        <ul className="space-y-4 text-lg text-black">
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                Build the world's most reliable and verified business members directory
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                Generate real, high-quality business leads — not just listings
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                Enable global partnerships and cross-border trade growth
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                Support digital transformation for businesses of all sizes
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                Promote ethical, transparent, and verified B2B networking
                            </li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* WHAT WE DO */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
                {/* Slit light effect */}

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700">Our Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        What We <span className="text-gradient">Do</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Comprehensive solutions for global business growth
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { text: "Global B2B Business Directory", icon: Briefcase, color: "blue" },
                            { text: "Verified Company Profiles", icon: BadgeCheck, color: "blue" },
                            { text: "Smart Search & Filters", icon: Search, color: "blue" },
                            { text: "Partnership Discovery", icon: Users, color: "blue" },
                            { text: "Member Promotion & Advertising", icon: Megaphone, color: "blue" },
                            { text: "Business Data Intelligence", icon: BarChart3, color: "blue" },
                            { text: "Lead Generation Tools", icon: Mail, color: "blue" },
                            { text: "CRM & Outreach Integrations (Roadmap)", icon: Plug, color: "blue" }
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.text}
                                    className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 shimmer-card card-hover-lift slit-light"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-base font-semibold text-gray-800 leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* WHO WE SERVE */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>

                {/* Slit light effect */}


                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                        <Globe2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700">Our Community</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Who We <span className="text-gradient">Serve</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Supporting businesses across all industries and sizes
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { text: "Startups & SMEs", icon: Users, gradient: "from-blue-500 to-blue-700" },
                            { text: "Enterprises", icon: Building2, gradient: "from-blue-500 to-blue-700" },
                            { text: "Manufacturers", icon: Factory, gradient: "from-blue-500 to-blue-700" },
                            { text: "Service Providers", icon: Briefcase, gradient: "from-blue-500 to-blue-700" },
                            { text: "Consultants & Agencies", icon: Users, gradient: "from-blue-500 to-blue-700" },
                            { text: "Distributors", icon: Truck, gradient: "from-blue-500 to-blue-700" },
                            { text: "Exporters & Importers", icon: Ship, gradient: "from-blue-500 to-blue-700" },
                            { text: "Tech Companies", icon: Laptop, gradient: "from-blue-500 to-blue-700" },
                            { text: "Healthcare, Logistics, Finance & More", icon: Stethoscope, gradient: "from-blue-500 to-blue-700" }
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.text}
                                    className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 shimmer-card card-hover-lift slit-light relative overflow-hidden"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}></div>
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-base font-semibold text-gray-800 leading-snug relative z-10">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* TRUST & VERIFICATION */}
            <section className="py-24 bg-white relative">
                {/* Slit light effect */}

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700">Security First</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Trust & <span className="text-gradient">Verification</span>
                    </h2>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Every business listed on Global Business Alliance goes through
                        a structured and transparent verification process to ensure
                        credibility, authenticity, and long-term trust.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Profile Validation",
                            "Business Verification",
                            "Contact Authentication",
                            "Industry Classification"
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="group bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all shimmer-card card-hover-lift slit-light"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-base font-bold text-gray-800">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* COMMUNITY CTA */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>

                {/* Slit light effect */}


                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                        <Users className="w-5 h-5 text-blue-300" />
                        <span className="text-sm font-semibold text-blue-100">Join Our Community</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
                        Built for the Global Business Community
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                        More than a directory — a complete business ecosystem designed to help
                        companies grow faster, expand globally, and build brand authority.
                    </p>

                    <button className="group relative bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden slit-light">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Join Global Business Alliance
                            <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>
            </section>

        </div>
    );
}