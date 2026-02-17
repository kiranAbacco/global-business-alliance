import { useEffect, useState } from "react";
import { Eye, Building2, Mail, Globe, Download } from "lucide-react";

import MemberDetailsPage from "../components/MemberDetailsPage";

import { Phone, MapPin, User, Search } from "lucide-react";

import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import axios from "axios";
import { FileDown } from "lucide-react";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function MembersList() {
    const downloadExcel = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/members`);
            const data = res.data;

            const formattedData = data.map(m => ({
                "Company Name": m.companyName,
                "Industry": m.industry,
                "Country": m.country,
                "Website": m.companyWebsite,

                // ✅ Social Media
                "Facebook": m.facebook || "",
                "Instagram": m.instagram || "",
                "LinkedIn": m.linkedin || "",
                "X (Twitter)": m.twitter || "",

                "Company Email": m.companyEmail,
                "Company Phone": m.companyTelephone,
                "Person Name": m.givenName,
                "Personal Phone": m.phone,
                "Title": m.title,
                "Employees": m.employees,
                "Address": m.companyAddress,
                "Purpose": m.companyPurpose,
                "Activities": m.activities?.join(", "),
                "Special Focus": m.specialFocus
            }));


            const worksheet = XLSX.utils.json_to_sheet(formattedData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Members");

            XLSX.writeFile(workbook, "Allmembers_details.xlsx");
        } catch (err) {
            console.error(err);
            alert("Download failed");
        }
    };

    const [searchTerm, setSearchTerm] = useState("");


    const navigate = useNavigate();



    const [members, setMembers] = useState([]);


    // Filters
    const [countryFilter, setCountryFilter] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/members`)
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);


    // Unique filter values
    const countries = [...new Set(members.map(m => m.country).filter(Boolean))];
    const industries = [...new Set(members.map(m => m.industry).filter(Boolean))];
    const roles = [...new Set(members.map(m => m.role || m.title).filter(Boolean))];

    // Apply filters + search
    const filteredMembers = members.filter(m => {
        const fullName = `${m.givenName} ${m.familyName}`.toLowerCase();
        const company = (m.companyName || "").toLowerCase();

        const matchesSearch =
            !searchTerm ||
            fullName.includes(searchTerm.toLowerCase()) ||
            company.includes(searchTerm.toLowerCase());

        return (
            matchesSearch &&
            (!countryFilter || m.country === countryFilter) &&
            (!industryFilter || m.industry === industryFilter) &&
            (!roleFilter || (m.role || m.title) === roleFilter)
        );
    });


    return (
        <section className="min-h-screen bg-white p-8 text-slate-900">

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
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
                }
            `}</style>

            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="p-8 border-b border-gray-200 bg-gray-50 flex flex-wrap justify-between items-end gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full mb-3">
                            <Building2 className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Directory</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900">
                            Members Directory
                        </h1>
                        <p className="text-base text-gray-600 font-medium">
                            Overview of all registered company details
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Search name or company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm w-64 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                            />
                        </div>
                        {/* Download icon */}
                        <button
                            onClick={downloadExcel}
                            title="Download Excel"
                            className="w-11 h-11 rounded-lg bg-green-600 hover:bg-green-700 flex items-center justify-center text-white shadow-sm hover:shadow transition-all"
                        >
                            <Download size={18} />
                        </button>

                        <div className="bg-blue-600 px-5 py-2.5 rounded-lg text-white text-xs font-semibold shadow-sm">
                            {filteredMembers.length} Members
                        </div>
                    </div>
                </div>


                {/* Content */}
                <div className="flex flex-col lg:flex-row">

                    {/* LEFT FILTER SIDEBAR */}
                    <aside className="lg:w-64 w-full p-6 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="p-1.5 bg-blue-600 rounded-lg">
                                <Search className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">Filters</h3>
                        </div>

                        <div className="space-y-4 sticky top-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Country</label>
                                <select
                                    value={countryFilter}
                                    onChange={e => setCountryFilter(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white font-medium focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                                >
                                    <option value="">All Countries</option>
                                    {countries.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Industry</label>
                                <select
                                    value={industryFilter}
                                    onChange={e => setIndustryFilter(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white font-medium focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                                >
                                    <option value="">All Industries</option>
                                    {industries.map(i => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Role</label>
                                <select
                                    value={roleFilter}
                                    onChange={e => setRoleFilter(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white font-medium focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                                >
                                    <option value="">All Roles</option>
                                    {roles.map(r => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* CARDS GRID */}
                    <div className="flex-1 p-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                        {filteredMembers.map((member, index) => (
                            <div
                                key={member.id}
                                onClick={() => navigate(`/dashboard/members/${member.id}`)}
                                className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer card-hover animate-fade-in"
                                style={{ animationDelay: `${index * 30}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <img
                                        src={
                                            member.companyLogo
                                                ? `${API_URL}/${member.companyLogo}`
                                                : "/default-logo.png"
                                        }
                                        className="w-14 h-14 object-contain rounded-lg bg-gray-50 p-2 border border-gray-200"
                                        alt={member.companyName}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/default-logo.png";
                                        }}
                                    />
                                    <h3 className="font-semibold text-base text-gray-900 leading-tight">
                                        {member.companyName || "No Company Name"}
                                    </h3>
                                </div>


                                <div className="space-y-3 text-sm text-gray-700">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <MapPin size={16} className="text-gray-600" />
                                        </div>
                                        <span className="font-medium">{member.country}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Phone size={16} className="text-gray-600" />
                                        </div>
                                        <span className="font-medium">{member.phone || "N/A"}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Mail size={16} className="text-gray-600" />
                                        </div>
                                        <span className="font-medium truncate">{member.companyEmail || member.email || "N/A"}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <Globe size={16} className="text-gray-600" />
                                        </div>
                                        <a
                                            href={
                                                member.companyWebsite?.startsWith("http")
                                                    ? member.companyWebsite
                                                    : `https://${member.companyWebsite}`
                                            }
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                            className="font-medium text-blue-600 hover:text-blue-700 hover:underline truncate"
                                        >
                                            {member.companyWebsite || "No Website"}
                                        </a>
                                    </div>

                                    {member.contacts && (
                                        (() => {
                                            const contacts =
                                                typeof member.contacts === "string"
                                                    ? JSON.parse(member.contacts)
                                                    : member.contacts;

                                            const publicContacts = contacts;


                                            if (!publicContacts || publicContacts.length === 0) return null;

                                            return (
                                                <div className="pt-4 mt-4 border-t border-gray-100">
                                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                                        Responsible Persons
                                                    </h4>

                                                    <div className="space-y-2">
                                                        {publicContacts.map((contact, i) => (
                                                            <div key={i} className="text-sm text-gray-700">
                                                                <div className="font-medium">
                                                                    {contact.prefix} {contact.givenName} {contact.familyName}
                                                                </div>

                                                                {contact.title && (
                                                                    <div className="text-gray-500 text-xs">
                                                                        {contact.title}
                                                                    </div>
                                                                )}

                                                                {contact.mobile && (
                                                                    <div className="text-gray-500 text-xs">
                                                                        {contact.mobile}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })()
                                    )}


                                    {/* Social Media */}
                                    {(member.facebook || member.instagram || member.linkedin || member.twitter) && (
                                        <div className="pt-4 mt-4 border-t border-gray-100">
                                            <div className="flex gap-3">
                                                {member.facebook && (
                                                    <a href={member.facebook} target="_blank" onClick={(e) => e.stopPropagation()}>
                                                        Facebook
                                                    </a>
                                                )}
                                                {member.instagram && (
                                                    <a href={member.instagram} target="_blank" onClick={(e) => e.stopPropagation()}>
                                                        Instagram
                                                    </a>
                                                )}
                                                {member.linkedin && (
                                                    <a href={member.linkedin} target="_blank" onClick={(e) => e.stopPropagation()}>
                                                        Linkedin
                                                    </a>
                                                )}
                                                {member.twitter && (
                                                    <a href={member.twitter} target="_blank" onClick={(e) => e.stopPropagation()}>
                                                        X
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>

                </div>



            </div>


        </section>
    );
}