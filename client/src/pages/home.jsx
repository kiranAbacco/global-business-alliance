import {
    Eye,
    BadgeCheck,
    MailSearch,
    CalendarDays,
    Award,
    Globe,
    Rocket
} from "lucide-react";
import { CheckCircle, ArrowRight, Zap, Star, Users, Play } from "lucide-react";
import { useState, useEffect } from "react";
import ChatBot from "../components/ChatBot";


const features = [
    {
        title: "Brand Visibility",
        desc: "Get discovered by global buyers, partners, and decision-makers.",
        icon: Eye
    },
    {
        title: "Digital Credibility",
        desc: "Verified profiles build instant trust with serious businesses.",
        icon: BadgeCheck
    },
    {
        title: "Lead Exposure",
        desc: "Receive direct inquiries from relevant B2B audiences.",
        icon: MailSearch
    },
    {
        title: "Event Participation",
        desc: "Discover and promote your presence at global business events.",
        icon: CalendarDays
    },
    {
        title: "Industry Authority",
        desc: "Position your brand as a trusted leader in your industry.",
        icon: Award
    }
];



export default function Home() {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);


    const heroBackgrounds = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (

        <div className="w-full overflow-hidden text-gray-800">
            <ChatBot />
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-end overflow-hidden py-20">

                <style>{`
                           @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Bebas+Neue&display=swap');
                           
                           * {
                               font-family: 'Outfit', sans-serif;
                           }
                           
                           .font-display {
                               font-family: 'Bebas Neue', sans-serif;
                               letter-spacing: 0.02em;
                           }
           
                           @keyframes float {
                               0%, 100% { transform: translateY(0px); }
                               50% { transform: translateY(-30px); }
                           }
           
                           .animate-float {
                               animation: float 8s ease-in-out infinite;
                           }
           
                           @keyframes fadeIn {
                               from {
                                   opacity: 0;
                                   transform: scale(0.95);
                               }
                               to {
                                   opacity: 1;
                                   transform: scale(1);
                               }
                           }
           
                           .animate-fadeIn {
                               animation: fadeIn 0.8s ease-out;
                           }
           
                           @keyframes fadeInUp {
                               from {
                                   opacity: 0;
                                   transform: translateY(40px);
                               }
                               to {
                                   opacity: 1;
                                   transform: translateY(0);
                               }
                           }
           
                           .animate-fadeInUp {
                               animation: fadeInUp 0.8s ease-out;
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
           
                           .shimmer-effect {
                               position: relative;
                               overflow: hidden;
                           }
           
                           .shimmer-effect::after {
                               content: '';
                               position: absolute;
                               top: 0;
                               left: 0;
                               width: 100%;
                               height: 100%;
                               background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                               animation: shimmer-sweep 3s infinite;
                           }
           
                           video {
                               object-fit: cover;
                           }
                       `}</style>

                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://cdn.coverr.co/videos/coverr-business-meeting-in-a-modern-office-4166/1080p.mp4" type="video/mp4" />
                        {/* Fallback to image slider if video doesn't load */}
                    </video>

                    {/* Fallback: Background image slider (in case video fails) */}
                    <div className="absolute inset-0">
                        {heroBackgrounds.map((bg, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    backgroundImage: `url('${bg}')`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Enhanced gradient overlay with mesh pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-00/95 via-blue-900/95 to-blue-00/95"></div>



                {/* Decorative animated elements */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse"></div>

                {/* Left-aligned Bottom Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-32">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="mb-8 animate-fadeIn">
                            <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-sm font-bold shadow-2xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer">
                                <div className="p-1.5 bg-white/20 rounded-full">
                                    <Globe className="w-5 h-5" />
                                </div>
                                Global B2B Directory
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight mb-8 drop-shadow-2xl animate-fadeInUp">
                            Where B2B Brands Get
                            <span className="block mt-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient-shift bg-clip-text text-transparent">
                                Seen, Trusted & Chosen
                            </span>
                        </h1>

                        {/* Accent line */}
                        <div className="h-2 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-8 animate-gradient-shift"></div>

                        {/* Subheading */}
                        <p className="text-2xl md:text-3xl text-white/95 leading-relaxed font-semibold mb-12 animate-fadeInUp max-w-3xl" style={{ animationDelay: '0.2s' }}>
                            Connect with verified businesses worldwide. Discover the right partners and give your brand the visibility it deserves in the global B2B marketplace.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 items-start animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            <button className="group relative bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:shadow-white/30 overflow-hidden shimmer-effect hover:scale-110">
                                <span className="relative z-10 flex items-center gap-3">
                                    Get Started Free
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>

                            <button className="group relative bg-white/10 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black text-xl transition-all border-2 border-white/50 hover:border-white shadow-2xl hover:bg-white/20 hover:scale-110">
                                <span className="flex items-center gap-3">
                                    <Play className="w-6 h-6 fill-white" />
                                    Watch Demo
                                </span>
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-8 mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="text-2xl font-black text-white">10K+</span>
                                </div>
                                <div>
                                    <div className="text-sm text-white/80 font-semibold">Members</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="text-2xl font-black text-white">150+</span>
                                </div>
                                <div>
                                    <div className="text-sm text-white/80 font-semibold">Countries</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="text-2xl font-black text-white">99%</span>
                                </div>
                                <div>
                                    <div className="text-sm text-white/80 font-semibold">Verified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {heroBackgrounds.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBgIndex(index)}
                            className={`transition-all duration-300 rounded-full backdrop-blur-sm ${index === currentBgIndex
                                ? 'w-16 h-4 bg-white shadow-lg'
                                : 'w-4 h-4 bg-white/40 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <div className="w-10 h-14 rounded-full border-2 border-white/40 backdrop-blur-sm flex items-start justify-center p-2 bg-white/5">
                        <div className="w-2 h-4 bg-white/70 rounded-full"></div>
                    </div>
                </div>
            </section>




            {/* FREE REGISTRATION */}
            <section className="relative py-24 overflow-hidden">
                {/* Background with animated elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>


                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* IMAGE */}
                        <div className="relative group animate-fadeInLeft">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div
                                className="relative rounded-3xl shadow-2xl overflow-hidden h-[500px] bg-cover bg-center transform group-hover:scale-105 transition-all duration-700 border-4 border-white"
                                style={{
                                    backgroundImage: "url('/images/img2.jpg')"
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute top-8 right-8 glass-effect px-6 py-4 rounded-2xl shadow-2xl animate-float border border-white/30">
                                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">30 Days</div>
                                <div className="text-xs text-slate-700 font-bold uppercase tracking-wider">FREE TRIAL</div>
                            </div>
                        </div>

                        {/* TEXT CONTENT */}
                        <div className="animate-fadeInRight">
                            <div className="inline-block mb-6">
                                <span className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-gradient text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl">
                                    <Zap className="w-4 h-4 inline mr-2" />
                                    Limited Time Offer
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-display mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                    Free Registration — First 30 Days
                                </span>
                            </h2>

                            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8 animate-gradient"></div>

                            <p className="text-slate-700 mb-10 text-xl leading-relaxed font-medium">
                                Get full access to the Global Business Alliance platform for 30 days and
                                experience the real value before upgrading. No credit card required.
                            </p>

                            <ul className="space-y-5 text-slate-800 mb-10">
                                {[
                                    "Create a verified company profile",
                                    "Appear in industry & country searches",
                                    "Get indexed for brand discovery",
                                    "Start building digital authority early"
                                ].map((text, index) => (
                                    <li key={text} className="flex items-start gap-4 group hover:translate-x-2 transition-transform animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/40 group-hover:scale-110 transition-transform">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-semibold pt-2 text-lg">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-3xl overflow-hidden transition-all hover:scale-105">
                                <span className="relative z-10 flex items-center gap-3">
                                    Register Free
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 shimmer-effect"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            {/* MEMBERSHIP PLANS */}
            <section className="relative py-28 overflow-hidden">
                {/* White background */}
                <div className="absolute inset-0 bg-white"></div>

                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border border-blue-200 shadow-lg">
                            <Star className="w-4 h-4 inline mr-2" />
                            Pricing Plans
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                        Flexible Membership Plans
                    </h2>

                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-8 animate-gradient"></div>

                    <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
                        Choose a membership plan designed to increase your brand visibility,
                        credibility, and business growth. Simple pricing with real value.
                    </p>

                    {/* DEMO CARD */}
                    <div className="relative bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto overflow-hidden card-3d-hover animate-scale-in">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 animate-gradient rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                                <Award className="w-12 h-12 text-white" />
                            </div>

                            <h3 className="text-4xl font-display mb-6 text-slate-900">
                                Plans for Every Business Size
                            </h3>

                            <p className="text-slate-700 mb-10 text-lg leading-relaxed">
                                Whether you're a startup or an established enterprise, our membership
                                plans help you get discovered, trusted, and contacted by the right
                                B2B audience.
                            </p>

                            {/* CTA BUTTON */}
                            <a
                                href="/pricing"
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-2xl hover:scale-110"
                            >
                                View Pricing Plans
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <style>{`
                           @keyframes float {
                               0%, 100% { transform: translateY(0px); }
                               50% { transform: translateY(-15px); }
                           }
           
                           .animate-float {
                               animation: float 6s ease-in-out infinite;
                           }
           
                           @keyframes gradient-move {
                               0%, 100% { background-position: 0% 50%; }
                               50% { background-position: 100% 50%; }
                           }
           
                           .animate-gradient {
                               background-size: 200% 200%;
                               animation: gradient-move 6s ease infinite;
                           }
           
                           @keyframes scale-in {
                               from {
                                   opacity: 0;
                                   transform: scale(0.9);
                               }
                               to {
                                   opacity: 1;
                                   transform: scale(1);
                               }
                           }
           
                           .animate-scale-in {
                               animation: scale-in 0.6s ease-out;
                           }
           
                           .card-3d-hover {
                               transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                           }
           
                           .card-3d-hover:hover {
                               transform: translateY(-12px) rotateX(5deg) scale(1.03);
                               box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
                           }
                       `}</style>
            </section>



            {/* WHO SHOULD JOIN */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-gradient text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl">
                            <Users className="w-4 h-4 inline mr-2" />
                            Target Audience
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                            Who Should Join?
                        </span>
                    </h2>

                    <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mx-auto mb-8 animate-gradient"></div>

                    <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
                        Global Business Alliance is built for companies that sell to other
                        businesses and want to grow visibility, trust, and partnerships globally.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "B2B Companies",
                                img: "https://www.unboundb2b.com/wp-content/uploads/2023/02/B2B-Lead-Generation-Companies-1568x1045.webp",
                                desc: "Connect with buyers, partners, and decision-makers worldwide."
                            },
                            {
                                title: "Startups & SMEs",
                                img: "/images/img4.jpeg",
                                desc: "Build credibility and discover growth opportunities early."
                            },
                            {
                                title: "Manufacturers",
                                img: "/images/img5.jpeg",
                                desc: "Find distributors, buyers, and global supply partners."
                            },
                            {
                                title: "Tech & SaaS Firms",
                                img: "/images/img6.jpeg",
                                desc: "Showcase solutions to a targeted B2B audience."
                            },
                            {
                                title: "Consultants & Agencies",
                                img: "/images/img7.jpeg",
                                desc: "Attract clients looking for trusted expertise."
                            },
                            {
                                title: "Exporters & Importers",
                                img: "/images/img8.jpeg",
                                desc: "Expand into new markets and international trade."
                            }
                        ].map((item, index) => (
                            <div
                                key={item.title}
                                className="group bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-purple-400 transition-all card-3d-hover animate-scale-in"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    <div
                                        className="relative h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                        style={{
                                            backgroundImage: `url('${item.img}')`
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all"></div>
                                </div>
                                <div className="p-7 text-left relative">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
                                    <h3 className="font-black text-xl mb-3 text-slate-900 group-hover:text-purple-600 transition-colors relative z-10">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative py-28 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-blue-50/40"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    {/* Section Header */}
                    <div className="inline-block mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl">
                            <Rocket className="w-4 h-4 inline mr-2" />
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display mb-8 leading-tight">
                        <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                            Built to Help B2B Brands Get
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                            Discovered, Trusted & Chosen
                        </span>
                    </h2>

                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-10 animate-gradient"></div>

                    <p className="max-w-3xl mx-auto text-slate-700 text-xl mb-16 leading-relaxed">
                        We provide more than just listings. Our platform is designed to increase
                        your brand's visibility, credibility, and inbound business opportunities
                        across global B2B markets.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-3xl p-7 text-left shadow-xl hover:shadow-2xl hover:border-purple-400 card-3d-hover animate-scale-in"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                        <div className="relative flex items-center justify-center w-18 h-18 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 animate-gradient text-white group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/30">
                                            <Icon className="w-10 h-10" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-black text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* FINAL CTA */}
            <section className="relative py-32 text-white text-center overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.startups.co.uk/wp-content/uploads/2024/06/Register-a-business.jpg?width=709&height=460&fit=crop')"
                    }}
                ></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-pink-900/95"></div>

                {/* Animated elements */}
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white/20 rounded-full animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="inline-block mb-6">
                        <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
                            Ready to Join?
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Get Started Today
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                        Join thousands of businesses already growing their brand visibility
                    </p>
                    <button className="group bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all shadow-2xl hover:scale-110 hover:-translate-y-2">
                        <span className="flex items-center gap-3">
                            Register Free
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </button>
                </div>
            </section>

            <style >{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s ease-out;
                }
                
                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
