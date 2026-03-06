import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, Phone, Globe, MapPin, User, Building, Filter } from "lucide-react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
export default function CountryMembers() {
    const { country } = useParams();
    const countryName = country.replace(/-/g, " ");

    const [members, setMembers] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {


        const params = new URLSearchParams({
            country: countryName
        });

        if (selectedIndustry) {
            params.append("industry", selectedIndustry);
        }

        fetch(`${API_URL}/api/memberships?${params}`)
            .then(res => res.json())
            .then(data => setMembers(data))
            .finally(() => setLoading(false));
    }, [countryName, selectedIndustry]);

    useEffect(() => {
        if (!countryName) return;

        fetch(
            `${API_URL}/api/memberships/industries?country=${countryName}`
        )
            .then(res => res.json())
            .then(data => setIndustries(data));
    }, [countryName]);



    return (
        <div className="min-h-screen bg-white">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                
                * {
                    font-family: 'Inter', sans-serif;
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }

                .card-hover {
                    transition: all 0.3s ease;
                }

                .card-hover:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
                }

                @keyframes spin-loader {
                    to { transform: rotate(360deg); }
                }

                .spinner {
                    animation: spin-loader 1s linear infinite;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-4">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Business Directory</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Members in {countryName && countryName.charAt(0).toUpperCase() + countryName.slice(1)}
                    </h1>

                    <p className="text-lg text-gray-600">
                        {members.length} {members.length === 1 ? 'business' : 'businesses'} found
                    </p>
                </div>

                {/* Industry filter */}
                <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="relative inline-block w-full md:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Filter className="w-5 h-5 text-gray-400" />
                        </div>
                        <select
                            value={selectedIndustry}
                            onChange={e => setSelectedIndustry(e.target.value)}
                            className="pl-11 pr-10 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all w-full md:w-80 cursor-pointer appearance-none bg-white"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 0.75rem center',
                                backgroundSize: '1.25rem'
                            }}
                        >
                            <option value="">All industries</option>
                            {industries.map(i => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 border-3 border-gray-200 rounded-full"></div>
                                <div className="w-12 h-12 border-3 border-blue-600 border-t-transparent rounded-full absolute top-0 spinner"></div>
                            </div>
                            <p className="text-gray-600 font-medium">Loading members...</p>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && members.length === 0 && (
                    <div className="bg-gray-50 rounded-2xl p-16 text-center border border-gray-100">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Building className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No members found</h3>
                        <p className="text-gray-600">Try selecting a different industry filter.</p>
                    </div>
                )}

                {/* Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((m, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden card-hover animate-fade-in"
                            style={{ animationDelay: `${i * 30}ms` }}
                        >
                            {/* Header */}
                            <div className="p-5 bg-gray-50 border-b border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                                        <Building className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-base text-gray-900 leading-tight break-words">
                                            {m.companyName}
                                        </h3>
                                        {m.industry && (
                                            <span className="inline-block mt-2 px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                                                {m.industry}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 text-sm text-gray-700 space-y-3.5">
                                {m.companyAddress && (
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <span className="font-medium leading-relaxed break-words">{m.companyAddress}</span>
                                    </div>
                                )}

                                {m.companyTelephone && (
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <span className="font-medium">{m.companyTelephone}</span>
                                    </div>
                                )}

                                {m.companyWebsite && (
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <a
                                            href={m.companyWebsite}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 hover:text-blue-700 hover:underline break-all font-medium transition-colors"
                                        >
                                            {m.companyWebsite}
                                        </a>
                                    </div>
                                )}

                                {(m.givenName || m.familyName) && (
                                    <div className="pt-3.5 border-t border-gray-100">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                                <User className="w-4 h-4 text-gray-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-xs uppercase tracking-wide text-gray-500 mb-1">
                                                    Responsible person
                                                </p>
                                                <p className="font-semibold text-gray-900">
                                                    {m.givenName} {m.familyName}
                                                    {m.title && <span className="text-gray-600 font-normal text-sm block mt-0.5">{m.title}</span>}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer actions */}
                            <div className="flex border-t border-gray-100 divide-x divide-gray-100 text-sm bg-gray-50">
                                {m.companyTelephone && (
                                    <a
                                        href={`tel:${m.companyTelephone}`}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-gray-600" />
                                        <span className="font-semibold text-gray-700">Call</span>
                                    </a>
                                )}

                                {m.companyWebsite && (
                                    <a
                                        href={m.companyWebsite}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Globe className="w-4 h-4 text-gray-600" />
                                        <span className="font-semibold text-gray-700">Website</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}