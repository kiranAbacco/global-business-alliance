import { Check, Star, Zap, Sparkles, Crown, Rocket, Shield, TrendingUp, Award, Globe, Users, BookOpen, Target, Handshake, Calendar, Megaphone, Database, Filter, CreditCard, BarChart3, Zap as ZapIcon, Settings, Users as UsersIcon, Lock, Mail, Search, FileDown, PieChart } from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";


export default function MembershipPlans() {
    const [currency, setCurrency] = useState("USD");
    const handleCheckout = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/payment/create-checkout-session",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ currency }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Backend error:", errorText);
                return;
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url; // ✅ NEW Stripe redirect
            }

        } catch (error) {
            console.error("Checkout error:", error);
        }
    };







    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-white/20 min-h-screen relative overflow-hidden">

            <style>{`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Montserrat:wght@900&display=swap');

* {
font-family: 'Plus Jakarta Sans', sans-serif;
}

.font-display {
font-family: 'Montserrat', sans-serif;
letter-spacing: -0.02em;
}

@keyframes float-up-down {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-25px); }
}

.animate-float-up-down {
animation: float-up-down 6s ease-in-out infinite;
}

@keyframes gradient-rotate {
0%, 100% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
}

.animate-gradient-rotate {
background-size: 200% 200%;
animation: gradient-rotate 6s ease infinite;
}

@keyframes shimmer-glow {
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
rgba(255, 255, 255, 0.3),
transparent
);
transform: translateX(-100%) rotate(45deg);
}

.shimmer-card:hover::before {
animation: shimmer-glow 1.5s ease-in-out;
}

@keyframes slide-in-up {
from {
opacity: 0;
transform: translateY(50px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

.animate-slide-in-up {
animation: slide-in-up 0.8s ease-out;
}

@keyframes pulse-ring {
0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
70% { box-shadow: 0 0 0 30px rgba(59, 130, 246, 0); }
100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}

.pulse-ring {
animation: pulse-ring 2.5s infinite;
}

.card-hover-3d {
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
transform-style: preserve-3d;
}

.card-hover-3d:hover {
transform: translateY(-16px) rotateX(5deg) scale(1.03);
box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.glass-card {
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.5);
}

@keyframes check-pop {
0%, 100% { transform: scale(1); }
50% { transform: scale(1.2); }
}

.check-icon:hover {
animation: check-pop 0.5s ease-in-out;
}

.text-gradient-blue {
background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.bg-mesh-gradient {
background:
radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.2) 0px, transparent 50%),
radial-gradient(at 97% 21%, hsla(215, 98%, 71%, 0.15) 0px, transparent 50%),
radial-gradient(at 52% 99%, hsla(215, 98%, 51%, 0.15) 0px, transparent 50%),
radial-gradient(at 10% 29%, hsla(215, 96%, 67%, 0.2) 0px, transparent 50%);
}

@keyframes bounce-gentle {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}

.animate-bounce-gentle {
animation: bounce-gentle 3s ease-in-out infinite;
}

.popular-badge {
background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
box-shadow: 0 4px 20px rgba(59, 130, 246, 0.5);
}

@keyframes float {
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-10px); }
}

.animate-float {
animation: float 4s ease-in-out infinite;
}

.benefit-card {
transition: all 0.3s ease;
}

.benefit-card:hover {
transform: translateY(-5px);
}

@keyframes icon-float {
0%, 100% { transform: translateY(0px) rotate(0deg); }
50% { transform: translateY(-5px) rotate(5deg); }
}

.animate-icon-float {
animation: icon-float 3s ease-in-out infinite;
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
width: 100%;
height: 2px;
background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
transform: rotate(-45deg);
transition: left 0.6s ease;
}

.slit-light:hover::after {
left: 100%;
}

.slit-beam {
position: absolute;
width: 1px;
height: 100%;
background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
transform: rotate(-15deg);
}
`}</style>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-up-down"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-up-down" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl animate-float-up-down" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* HEADER */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-up-down"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float-up-down"></div>


                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-in-up slit-light">
                        <Sparkles className="w-5 h-5 text-blue-200" />
                        <span className="text-sm font-bold text-blue-100">Flexible Pricing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                            Membership Plans
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                        Choose the right plan to access company data, generate leads, and grow your business with GBA's comprehensive database.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="px-4 py-2 rounded-xl text-black font-semibold"
                        >
                            <option value="USD">United States (USD)</option>
                            <option value="EUR">Europe (EUR)</option>
                            <option value="GBP">United Kingdom (GBP)</option>
                            <option value="INR">India (INR)</option>
                        </select>
                    </div>


                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 slit-light">
                            <Shield className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-semibold">Verified Data</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 slit-light">
                            <Award className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-semibold">Cancel Anytime</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 slit-light">
                            <Database className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-semibold">6000+ Credits</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* JOINING FREE */}
                <div className="glass-card rounded-3xl shadow-xl border-white/50 p-8 flex flex-col shimmer-card card-hover-3d animate-slide-in-up relative">

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-black text-gray-900">Joining Free</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Get started with basic access to explore the platform.
                    </p>

                    <div className="mb-8">
                        <span className="text-6xl font-display font-black text-gray-900">Free</span>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-700 mb-8 flex-grow">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Basic profile creation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Limited search access</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Community support</span>
                        </li>
                    </ul>

                    <button className="group mt-auto border-2 border-blue-300 rounded-2xl py-4 px-6 font-bold text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 slit-light">
                        Get Started Free
                    </button>
                </div>

                {/* ESSENTIALS PLAN */}
                <div className="relative glass-card rounded-3xl shadow-2xl border-2 border-blue-500 p-8 flex flex-col shimmer-card card-hover-3d scale-105 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 popular-badge text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 pulse-ring">
                        <Star className="w-4 h-4 fill-white" />
                        Most Popular
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg pulse-ring">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-black text-gray-900">Essentials</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Perfect for small teams and startups.
                    </p>

                    <div className="mb-8">
                        <span className="text-6xl font-display font-black text-gradient-blue">
                            {currency === "USD" && "$50"}
                            {currency === "EUR" && "€45"}
                            {currency === "GBP" && "£40"}
                            {currency === "INR" && "₹4000"}
                        </span>

                        <span className="text-gray-500 text-xl font-semibold"> / month</span>
                        <div className="text-sm text-gray-500 mt-2">or $600/year (Save 2 months)</div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700">6000 Credits Included</span>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-700 mb-8 flex-grow">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Company & GBA contact data access</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Advanced search with filters</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Export records using credits</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Access to Bouncecure for campaigns</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 check-icon">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Basic analytics & lead building</span>
                        </li>
                    </ul>


                    <button
                        onClick={handleCheckout}
                        className="group mt-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl py-4 px-6 font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden slit-light"
                    >

                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Start with Essentials
                            <TrendingUp className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </button>

                </div>

                {/* ENTERPRISE PLAN */}
                <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl shadow-2xl p-8 flex flex-col shimmer-card card-hover-3d overflow-hidden animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>


                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl shadow-lg pulse-ring">
                                <Crown className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-black">Enterprise</h3>
                        </div>

                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Best for larger sales teams & deep intelligence.
                        </p>

                        <div className="mb-8">
                            <span className="text-5xl font-display font-black">Custom</span>
                            <span className="text-blue-200 text-xl font-semibold block mt-2">Tailored Pricing</span>
                        </div>

                        <ul className="space-y-4 text-sm mb-8 flex-grow">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Custom seats & export volume</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Predictive analytics & buyer intent</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Advanced filtering & segmentation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">CRM & marketing automation integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center flex-shrink-0 check-icon">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-medium">Enhanced reporting & dedicated support</span>
                            </li>
                        </ul>

                        <button className="group mt-auto bg-white text-blue-900 rounded-2xl py-4 px-6 font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden slit-light">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Contact Sales
                                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* BENEFITS OF MEMBERSHIP - REDESIGNED */}
            <section className="relative py-20 overflow-hidden">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/30 to-white/30 opacity-30"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>


                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-white/30 mb-6 slit-light">
                            <Award className="w-6 h-6 text-blue-600" />
                            <span className="text-lg font-bold text-slate-800">Data Platform Benefits</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                Access Powerful Business Intelligence
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Leverage our comprehensive database to find verified leads, analyze markets, and accelerate your sales pipeline.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit Card 1: Verified Data */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Database className="w-8 h-8 text-white animate-icon-float" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Data</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Access accurate, up-to-date company and contact information verified by our team for reliable outreach.
                                </p>
                            </div>
                        </div>

                        {/* Benefit Card 2: Advanced Search */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Filter className="w-8 h-8 text-white animate-icon-float" style={{ animationDelay: '1s' }} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Search</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Filter by industry, location, company size, and more to find exactly what you're looking for.
                                </p>
                            </div>
                        </div>

                        {/* Benefit Card 3: Export Capabilities */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FileDown
                                        className="w-8 h-8 text-white animate-icon-float" style={{ animationDelay: '2s' }} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Export Capabilities</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Export data directly to your CRM or spreadsheet with flexible credit-based pricing.
                                </p>
                            </div>
                        </div>

                        {/* Benefit Card 4: Campaign Tools */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-8 h-8 text-white animate-icon-float" style={{ animationDelay: '0.5s' }} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Campaign Tools</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Access Bouncecure for email campaign management and deliverability optimization.
                                </p>
                            </div>
                        </div>

                        {/* Benefit Card 5: Analytics */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 className="w-8 h-8 text-white animate-icon-float" style={{ animationDelay: '1.5s' }} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics Dashboard</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Track your data usage, export history, and lead generation performance with detailed reports.
                                </p>
                            </div>
                        </div>

                        {/* Benefit Card 6: CRM Integration */}
                        <div className="group relative bg-white rounded-2xl shadow-lg p-8 benefit-card hover:shadow-2xl transition-all duration-300 slit-light">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Settings className="w-8 h-8 text-white animate-icon-float" style={{ animationDelay: '2.5s' }} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">CRM Integration</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Seamlessly sync data with your existing CRM and marketing automation platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST / GUARANTEE */}
            <section className="max-w-5xl mx-auto px-4 pb-24 text-center relative z-10">
                <div className="glass-card rounded-3xl shadow-2xl border-white/50 p-10 shimmer-card card-hover-3d animate-slide-in-up relative">

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-display font-black text-3xl text-gray-900">
                            Trusted by Sales Teams Worldwide
                        </h4>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                        All data is verified and regularly updated. GDPR compliant. Cancel or upgrade
                        anytime. No hidden fees.
                    </p>

                    {/* Trust metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 slit-light">
                            <div className="text-3xl font-bold text-blue-600 mb-1">10M+</div>
                            <div className="text-sm text-gray-600 font-semibold">Company Records</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 slit-light">
                            <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                            <div className="text-sm text-gray-600 font-semibold">Countries</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 slit-light">
                            <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                            <div className="text-sm text-gray-600 font-semibold">Data Accuracy</div>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 slit-light">
                            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-600 font-semibold">Support</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}