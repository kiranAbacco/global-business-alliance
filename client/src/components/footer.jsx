import { Link } from "react-router-dom";
import { Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 border-t">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* TOP GRID */}
                <div className="grid gap-12 md:grid-cols-4">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/img12.png"
                                alt="GBA Logo"
                                className="h-10 w-auto"
                            />
                            <span className="text-xl font-bold text-blue-900">

                            </span>
                        </div>

                        <p className="text-base text-gray-600 leading-relaxed">
                            A verified global B2B alliance connecting trusted
                            businesses, decision-makers, and industry leaders
                            across international markets.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-base text-gray-900 font-semibold mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 text-base">
                            <li><Link to="/about" className="hover:text-blue-700">About Us</Link></li>
                            <li><Link to="/members" className="hover:text-blue-700">Members</Link></li>
                            <li><Link to="/pricing" className="hover:text-blue-700">Membership</Link></li>
                            <li><Link to="/verification" className="hover:text-blue-700">Verification</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="text-base text-gray-900 font-semibold mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-base">
                            <li><a href="#" className="hover:text-blue-700">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-700">Terms & Conditions</a></li>
                            {/* <li><a href="#" className="hover:text-blue-700">Help Center</a></li> */}
                            <li><a href="#" className="hover:text-blue-700">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-base text-gray-900 font-semibold mb-4">
                            Join the Alliance
                        </h4>

                        <p className="text-base text-gray-600 mb-5">
                            List your business and get discovered by verified
                            B2B buyers worldwide.
                        </p>

                        <Link
                            to="/join"
                            className="inline-block bg-blue-900 hover:bg-blue-800
                                       text-white text-base font-semibold
                                       px-6 py-3 rounded-lg transition"
                        >
                            Join Now
                        </Link>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-200 mt-14 pt-6 flex flex-col md:flex-row
                items-center justify-between text-base text-gray-500">

                    <span className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-700" />
                        © {new Date().getFullYear()} Global Business Alliance. All rights reserved.
                    </span>

                    <span className="mt-3 md:mt-0 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-700" />
                        Built for global B2B growth
                    </span>

                </div>

            </div>
        </footer>
    );
}
