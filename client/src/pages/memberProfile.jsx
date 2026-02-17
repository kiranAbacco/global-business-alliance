import { useState } from "react";
import InquiryModal from "../components/inquiryModal";


const mockMember = {
    name: "Alpha Tech Solutions",
    logo: "/photos/logo1.png",
    industry: "IT & Software",
    country: "USA",
    city: "New York",
    description:
        "Alpha Tech Solutions is a global software and IT consulting company specializing in cloud computing, AI-driven solutions, and enterprise digital transformation.",
    services: ["Cloud Services", "AI Solutions", "Enterprise Software"],
    website: "https://example.com",
    linkedin: "#",
    twitter: "#",
};

export default function MemberProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HEADER */}
            <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={mockMember.logo}
                        alt={mockMember.name}
                        className="w-24 h-24 bg-white p-2 rounded-xl object-contain"
                    />

                    <div>
                        <h1 className="text-3xl font-extrabold mb-2">
                            {mockMember.name}
                        </h1>
                        <p className="text-blue-100">
                            {mockMember.industry} • {mockMember.city}, {mockMember.country}
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-10">
                    {/* ABOUT */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                        <h2 className="text-2xl font-bold mb-4">About the Company</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {mockMember.description}
                        </p>
                    </div>

                    {/* SERVICES */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border">
                        <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
                        <div className="flex flex-wrap gap-3">
                            {mockMember.services.map((service) => (
                                <span
                                    key={service}
                                    className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6">
                    {/* CONTACT CARD */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <h3 className="font-bold text-lg mb-4">
                            Business Contact
                        </h3>

                        <a
                            href={mockMember.website}
                            target="_blank"
                            className="block text-center border rounded-lg py-3 mb-3 font-semibold"
                        >
                            Visit Website
                        </a>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-blue-900 text-white rounded-lg py-3 font-semibold"
                        >
                            Request Business Inquiry
                        </button>
                        <InquiryModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            companyName={mockMember.name}
                        />

                    </div>

                    {/* SOCIAL */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border">
                        <h3 className="font-bold text-lg mb-4">
                            Social Profiles
                        </h3>

                        <div className="flex gap-4">
                            <a href={mockMember.linkedin} className="text-blue-700">
                                LinkedIn
                            </a>
                            <a href={mockMember.twitter} className="text-blue-700">
                                Twitter / X
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
