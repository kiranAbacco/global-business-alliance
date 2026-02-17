import {
    X,
    User,
    Building2,
    FileText,
    MapPin,
    Calendar,
    Users,
    Target,
    Briefcase,
    Download,
    ArrowLeft,
    Mail,
    Phone,
    Globe,
    MapPinned
} from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function MemberDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/api/members/${id}`)
            .then(res => res.json())
            .then(data => {
                setMember(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [id]);

    const downloadMemberExcel = () => {
        const data = [{
            "Company Name": member.companyName,
            "Industry": member.industry,
            "Industry Main": member.industryMain,
            "Sub Industry": member.subIndustry,
            "Custom Industry": member.customIndustry,
            "Custom Sub Industry": member.customSubIndustry,
            "Country": member.country,
            "City": member.city,
            "State": member.state,
            "Postal Code": member.postalCode,
            "PO Box": member.poBox,
            "Website": member.companyWebsite,

            // ✅ Social Media
            "Facebook": member.facebook || "",
            "Instagram": member.instagram || "",
            "LinkedIn": member.linkedin || "",
            "X (Twitter)": member.twitter || "",

            "Company Email": member.companyEmail,
            "Company Phone": member.companyTelephone,
            "Company Logo": member.companyLogo,
            "Person Name": `${member.prefix || ""} ${member.givenName} ${member.familyName || ""}`.trim(),
            "Personal Phone": member.phone,
            "Title": member.title,
            "Employees": member.employees,
            "Address": member.companyAddress,
            "Purpose": member.companyPurpose,
            "Founding Date": member.foundingDate
                ? new Date(member.foundingDate).toLocaleDateString()
                : "",
            "Activities": member.activities?.join(", "),
            "Special Focus": member.specialFocus,
            "New Project": member.newProject,
            "Visibility": member.visibility,
            "Accept Statutes": member.acceptStatutes ? "Yes" : "No",
            "Donation": member.donation ? "Yes" : "No",
        }];


        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Member");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const file = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(file, `${member.companyName || "member"}_details.xlsx`);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-blue-600">Loading member details...</p>
                </div>
            </div>
        );
    }

    if (!member) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Member Not Found</h2>
                    <p className="text-blue-600 mb-6">The member you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-start gap-4 flex-1">
                            {member.companyLogo && (
                                <img
                                    src={`${API_URL}/${member.companyLogo}`}
                                    alt="Company Logo"
                                    className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-2 border-2 border-blue-100"
                                />
                            )}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {member.companyName || 'Member Details'}
                                </h1>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                                        ID: #{member.id}
                                    </span>
                                    <span>•</span>
                                    <span>Joined {new Date(member.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                                {member.industry && (
                                    <div className="mt-2">
                                        <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                            <Briefcase size={14} className="mr-1" />
                                            {member.industry}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={downloadMemberExcel}
                                className="px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
                            >
                                <Download size={18} />
                                Download
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className="p-3 rounded-xl hover:bg-blue-50 text-blue-700 transition-all duration-300"
                                title="Go Back"
                            >
                                <ArrowLeft size={24} />
                            </button>
                        </div>
                    </div>
                    {member.companyPurpose && (
                        <p className="text-gray-700 mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600 italic">
                            "{member.companyPurpose}"
                        </p>
                    )}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Contact & Location */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Contact Information</h2>
                            </div>
                            <div className="space-y-4">
                                <InfoItem icon={<Mail size={16} />} label="Company Email" value={member.companyEmail} />
                                <InfoItem icon={<Phone size={16} />} label="Company Phone" value={member.companyTelephone} />
                                <InfoItem icon={<Phone size={16} />} label="Personal Phone" value={member.phone} />
                                <InfoItem
                                    icon={<Globe size={16} />}
                                    label="Website"
                                    value={member.companyWebsite}
                                    isLink
                                />
                                {(member.facebook || member.instagram || member.linkedin || member.twitter) && (
                                    <div className="pt-4 border-t border-blue-100">
                                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                            Social Media
                                        </div>
                                        <div className="flex gap-4">
                                            {member.facebook && <a href={member.facebook} target="_blank">Facebook</a>}
                                            {member.instagram && <a href={member.instagram} target="_blank">Instagram</a>}
                                            {member.linkedin && <a href={member.linkedin} target="_blank">LinkedIn</a>}
                                            {member.twitter && <a href={member.twitter} target="_blank">X</a>}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* Location Information */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Location</h2>
                            </div>
                            <div className="space-y-4">
                                {member.companyAddress && (
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Address</div>
                                        <div className="text-sm text-gray-900">{member.companyAddress}</div>
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                    <InfoItem label="City" value={member.city} small />
                                    <InfoItem label="State" value={member.state} small />
                                    <InfoItem label="Postal Code" value={member.postalCode} small />
                                    <InfoItem label="PO Box" value={member.poBox} small />
                                </div>
                                <InfoItem icon={<MapPinned size={16} />} label="Country" value={member.country} />
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Primary Contact</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Full Name</div>
                                    <div className="text-sm text-gray-900 font-medium">
                                        {member.prefix} {member.givenName} {member.familyName}
                                    </div>
                                </div>
                                <InfoItem label="Title / Position" value={member.title} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Company Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Industry Classification */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Industry Classification</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoItem label="Industry Main" value={member.industryMain} />
                                <InfoItem label="Sub Industry" value={member.subIndustry} />
                                <InfoItem label="Custom Industry" value={member.customIndustry} />
                                <InfoItem label="Custom Sub Industry" value={member.customSubIndustry} />
                            </div>
                        </div>

                        {/* Company Information */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Company Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoItem
                                    icon={<Calendar size={16} />}
                                    label="Founding Date"
                                    value={member.foundingDate ? new Date(member.foundingDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long'
                                    }) : null}
                                />
                                <InfoItem label="Employees" value={member.employees} />
                                <InfoItem label="Visibility" value={member.visibility} />
                            </div>
                        </div>

                        {/* Business Strategy */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Business Strategy</h2>
                            </div>
                            <div className="space-y-4">
                                {member.activities && member.activities.length > 0 && (
                                    <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Activities</div>
                                        <div className="flex flex-wrap gap-2">
                                            {member.activities.map((activity, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <InfoItem label="Special Focus" value={member.specialFocus} />
                                    <InfoItem label="New Project" value={member.newProject} />
                                </div>
                            </div>
                        </div>

                        {/* Company Management */}
                        {member.contacts && Array.isArray(member.contacts) && member.contacts.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900">Company Management</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {member.contacts.map((contact, index) => (
                                        <div key={index} className="border-2 border-blue-100 rounded-xl p-4 bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-900 mb-2">{contact.name}</div>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                {contact.primaryPhone && (
                                                    <div className="flex items-center gap-2">
                                                        <Phone size={14} className="text-blue-600" />
                                                        {contact.primaryPhone}
                                                    </div>
                                                )}
                                                {contact.secondaryPhone && (
                                                    <div className="flex items-center gap-2">
                                                        <Phone size={14} className="text-blue-600" />
                                                        {contact.secondaryPhone}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Membership Agreement */}
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900">Membership Agreement</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${member.acceptStatutes ? 'bg-green-500' : 'bg-gray-300'}`}>
                                        {member.acceptStatutes && <span className="text-white text-sm">✓</span>}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Accepted Statutes</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${member.donation ? 'bg-green-500' : 'bg-gray-300'}`}>
                                        {member.donation && <span className="text-white text-sm">✓</span>}
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">Donation Provided</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Info Item Component */
function InfoItem({ icon, label, value, isLink, small }) {
    const handleClick = () => {
        if (isLink && value) {
            const url = value.startsWith("http") ? value : `https://${value}`;
            window.open(url, "_blank");
        }
    };

    return (
        <div>
            <div className="text-xs font-semibold text-gray-500 uppercase mb-1 flex items-center gap-1">
                {icon}
                {label}
            </div>
            <div
                onClick={handleClick}
                className={`text-sm text-gray-900 ${isLink ? 'text-blue-600 hover:text-blue-700 cursor-pointer hover:underline' : ''} ${small ? 'text-xs' : ''}`}
            >
                {value || <span className="text-gray-400 italic">Not specified</span>}
            </div>
        </div>
    );
}