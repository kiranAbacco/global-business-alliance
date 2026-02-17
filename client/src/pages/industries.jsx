import {
    Cpu,
    Factory,
    Building2,
    HeartPulse,
    Car,
    Banknote,
    Truck,
    GraduationCap,
    Home,
    Zap,
} from "lucide-react";

const industries = [
    {
        name: "IT & Software",
        icon: Cpu,
        description:
            "Software companies, SaaS providers, IT consulting firms, and digital solution providers.",
    },
    {
        name: "Manufacturing",
        icon: Factory,
        description:
            "Industrial manufacturers, OEMs, suppliers, and production companies.",
    },
    {
        name: "Construction",
        icon: Building2,
        description:
            "Construction firms, contractors, infrastructure and engineering companies.",
    },
    {
        name: "Healthcare",
        icon: HeartPulse,
        description:
            "Hospitals, clinics, medical suppliers, healthcare technology providers.",
    },
    {
        name: "Automotive",
        icon: Car,
        description:
            "Automotive manufacturers, suppliers, dealerships, and mobility solutions.",
    },
    {
        name: "Finance",
        icon: Banknote,
        description:
            "Banks, fintech companies, financial services, and investment firms.",
    },
    {
        name: "Logistics",
        icon: Truck,
        description:
            "Logistics providers, freight forwarders, supply chain and warehousing firms.",
    },
    {
        name: "Education",
        icon: GraduationCap,
        description:
            "Educational institutions, training providers, and e-learning platforms.",
    },
    {
        name: "Real Estate",
        icon: Home,
        description:
            "Real estate developers, brokers, property management companies.",
    },
    {
        name: "Energy",
        icon: Zap,
        description:
            "Energy producers, renewable energy companies, utilities, and suppliers.",
    },
];

export default function Industries() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HEADER */}
            <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Industries We Serve
                    </h1>
                    <p className="text-blue-100 max-w-3xl mx-auto">
                        Global Business Alliance connects verified companies across a wide
                        range of industries worldwide.
                    </p>
                </div>
            </section>

            {/* INDUSTRY GRID */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                        <div
                            key={industry.name}
                            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <industry.icon className="text-blue-900 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{industry.name}</h3>
                            </div>

                            <p className="text-gray-600 text-sm mb-6">
                                {industry.description}
                            </p>

                            <a
                                href="/members"
                                className="inline-block text-sm font-semibold text-blue-900 hover:underline"
                            >
                                View companies →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold mb-4">
                        Don’t See Your Industry?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        We are constantly expanding our global directory. List your business
                        today and get verified.
                    </p>

                    <a
                        href="/pricing"
                        className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                    >
                        List Your Business
                    </a>
                </div>
            </section>
        </div>
    );
}
