import {
    Building2,
    Globe,
    Mail,
    BarChart3,
    UserCircle,
    ShieldCheck
} from "lucide-react";

export default function Dashboard() {
    return (
        <section className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">


                {/* STATS */}
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                    {[
                        {
                            title: "total members",
                            value: "100k",
                            icon: ShieldCheck,
                            color: "text-green-600"
                        },
                        {
                            title: "countries",
                            value: "190",
                            icon: Globe,
                            color: "text-blue-600"
                        },
                        {
                            title: "Inquiries",
                            value: "500",
                            icon: Mail,
                            color: "text-indigo-600"
                        }
                    ].map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {item.title}
                                        </p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                            {item.value}
                                        </h3>
                                    </div>
                                    <Icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* MAIN GRID */}
                <div className="grid gap-6 md:grid-cols-3">

                    {/* PROFILE CARD */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <UserCircle className="w-10 h-10 text-blue-700 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Business Profile
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Update your company details, logo, and services to
                            increase trust and visibility.
                        </p>
                        <button className="text-blue-700 font-semibold text-sm hover:underline">
                            Edit Profile →
                        </button>
                    </div>

                    {/* ANALYTICS */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <BarChart3 className="w-10 h-10 text-indigo-700 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Analytics
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Track profile views, engagement, and inquiry trends.
                        </p>
                        <button className="text-indigo-700 font-semibold text-sm hover:underline">
                            View Analytics →
                        </button>
                    </div>

                    {/* MEMBERSHIP */}


                </div>

            </div>
        </section>
    );
}
