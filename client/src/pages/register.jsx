import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_BASE_URL;
// Country list

const countries = [
    { code: 'af', name: 'Afghanistan' },
    { code: 'al', name: 'Albania' },
    { code: 'dz', name: 'Algeria' },
    { code: 'ao', name: 'Angola' },
    { code: 'ao', name: 'Argentina' },
    { code: 'dz', name: 'Armenia' },
    { code: 'al', name: 'Australia' },
    { code: 'af', name: 'Austria' },
    { code: 'af', name: 'Azerbaijan' },
    { code: 'al', name: 'Bahrain' },
    { code: 'dz', name: 'Bangladesh' },
    { code: 'ao', name: 'Barbados' },
    { code: 'ao', name: 'Belarus' },
    { code: 'dz', name: 'Belgium' },
    { code: 'al', name: 'Bhutan' },
    { code: 'af', name: 'Bolivia' },
    { code: 'af', name: 'Bosnia and Herzegovina' },
    { code: 'al', name: 'Brazil' },
    { code: 'dz', name: 'Brunei' },
    { code: 'ao', name: 'Bulgaria' },
    { code: 'bi', name: 'Burundi' },
    { code: 'kh', name: 'Cambodia' },
    { code: 'cm', name: 'Cameroon' },
    { code: 'ca', name: 'Canada' },
    { code: 'cl', name: 'Chile' },
    { code: 'cn', name: 'China, Mainland' },
    { code: 'co', name: 'Colombia' },
    { code: 'cr', name: 'Costa Rica' },
    { code: 'hr', name: 'Croatia' },
    { code: 'cy', name: 'Cyprus' },
    { code: 'cz', name: 'Czech Republic' },
    { code: 'cd', name: 'Democratic Republic of the Congo' },
    { code: 'dk', name: 'Denmark' },
    { code: 'dj', name: 'Djibouti' },
    { code: 'do', name: 'Dominican Republic' },
    { code: 'ec', name: 'Ecuador' },
    { code: 'eg', name: 'Egypt' },
    { code: 'sv', name: 'El Salvador' },
    { code: 'ee', name: 'Estonia' },
    { code: 'et', name: 'Ethiopia' },
    { code: 'fj', name: 'Fiji' },
    { code: 'fi', name: 'Finland' },
    { code: 'fr', name: 'France' },
    { code: 'ga', name: 'Gabon' },
    { code: 'gm', name: 'Gambia' },
    { code: 'ge', name: 'Georgia' },
    { code: 'de', name: 'Germany' },
    { code: 'gh', name: 'Ghana' },
    { code: 'gr', name: 'Greece' },
    { code: 'gt', name: 'Guatemala' },
    { code: 'gn', name: 'Guinea' },
    { code: 'ht', name: 'Haiti' },
    { code: 'hn', name: 'Honduras' },
    { code: 'hk', name: 'Hong Kong, China' },
    { code: 'hu', name: 'Hungary' },
    { code: 'is', name: 'Iceland' },
    { code: 'in', name: 'India' },
    { code: 'id', name: 'Indonesia' },
    { code: 'ir', name: 'Iran' },
    { code: 'iq', name: 'Iraq' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'it', name: 'Italy' },
    { code: 'jm', name: 'Jamaica' },
    { code: 'jp', name: 'Japan' },
    { code: 'jo', name: 'Jordan' },
    { code: 'kz', name: 'Kazakhstan' },
    { code: 'ke', name: 'Kenya' },
    { code: 'kg', name: 'Kyrgyzstan' },
    { code: 'kr', name: 'South Korea' },
    { code: 'kw', name: 'Kuwait' },
    { code: 'la', name: 'Laos' },
    { code: 'lv', name: 'Latvia' },
    { code: 'lb', name: 'Lebanon' },
    { code: 'lr', name: 'Liberia' },
    { code: 'ly', name: 'Libya' },
    { code: 'lt', name: 'Lithuania' },
    { code: 'lk', name: 'Sri Lanka' },
    { code: 'ma', name: 'Morocco' },
    { code: 'md', name: 'Moldova' },
    { code: 'me', name: 'Montenegro' },
    { code: 'mn', name: 'Mongolia' },
    { code: 'mz', name: 'Mozambique' },
    { code: 'mr', name: 'Mauritania' },
    { code: 'mu', name: 'Mauritius' },
    { code: 'mx', name: 'Mexico' },
    { code: 'mm', name: 'Myanmar' },
    { code: 'my', name: 'Malaysia' },
    { code: 'mv', name: 'Maldives' },
    { code: 'mt', name: 'Malta' },
    { code: 'na', name: 'Namibia' },
    { code: 'np', name: 'Nepal' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'ni', name: 'Nicaragua' },
    { code: 'ne', name: 'Niger' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'no', name: 'Norway' },
    { code: 'om', name: 'Oman' },
    { code: 'pk', name: 'Pakistan' },
    { code: 'pa', name: 'Panama' },
    { code: 'pe', name: 'Peru' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pl', name: 'Poland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'pr', name: 'Puerto Rico' },
    { code: 'qa', name: 'Qatar' },
    { code: 'cg', name: 'Republic of the Congo' },
    { code: 'ro', name: 'Romania' },
    { code: 'ru', name: 'Russia' },
    { code: 'rw', name: 'Rwanda' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'sn', name: 'Senegal' },
    { code: 'rs', name: 'Serbia' },
    { code: 'sc', name: 'Seychelles' },
    { code: 'sl', name: 'Sierra Leone' },
    { code: 'sg', name: 'Singapore' },
    { code: 'sk', name: 'Slovakia' },
    { code: 'si', name: 'Slovenia' },
    { code: 'so', name: 'Somalia' },
    { code: 'za', name: 'South Africa' },
    { code: 'es', name: 'Spain' },
    { code: 'sd', name: 'Sudan' },
    { code: 'sr', name: 'Suriname' },
    { code: 'se', name: 'Sweden' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'sy', name: 'Syria' },
    { code: 'tw', name: 'Taiwan, China' },
    { code: 'tj', name: 'Tajikistan' },
    { code: 'tz', name: 'Tanzania' },
    { code: 'th', name: 'Thailand' },
    { code: 'tn', name: 'Tunisia' },
    { code: 'tr', name: 'Turkey' },
    { code: 'tm', name: 'Turkmenistan' },
    { code: 'ug', name: 'Uganda' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'us', name: 'United States' },
    { code: 'uy', name: 'Uruguay' },
    { code: 'uz', name: 'Uzbekistan' },
    { code: 've', name: 'Venezuela' },
    { code: 'vn', name: 'Vietnam' },
    { code: 'vu', name: 'Vanuatu' },
    { code: 'ye', name: 'Yemen' },
    { code: 'zm', name: 'Zambia' },
    { code: 'zw', name: 'Zimbabwe' }
];


const industryOptions = {

    "Agriculture, Forestry, Fishing": [
        "Agricultural Production - Crops",
        "Agricultural Production - Livestock",
        "Agricultural Services",
        "Forestry",
        "Fishing, Hunting and Trapping"
    ],

    "Mining": [
        "Metal Mining",
        "Bituminous Coal and Lignite Mining",
        "Oil and Gas Extraction",
        "Mining and Quarrying of Nonmetallic Minerals, except Fuels"
    ],

    "Construction": [
        "Building Construction General Contractors and Operative Builders",
        "Heavy Construction other than Building Construction Contractors",
        "Construction Special Trade Contractors"
    ],

    "Manufacturing": [
        "Food and Kindred Products",
        "Tobacco Products",
        "Textile Mill Products",
        "Apparel and other Finished Products Made from Fabrics and Similar Materials",
        "Lumber and Wood Products, except Furniture",
        "Furniture and Fixtures",
        "Paper and Allied Products",
        "Printing, Publishing, and Allied Industries",
        "Chemicals and Allied Products",
        "Petroleum Refining and Related Industries",
        "Rubber and Miscellaneous Plastics Products",
        "Leather and Leather Products",
        "Stone, Clay, Glass, and Concrete Products",
        "Primary Metal Industries",
        "Fabricated Metal Products, except Machinery and Transportation Equipment",
        "Industrial and Commercial Machinery and Computer Equipment",
        "Electronic and other Electrical Equipment and Components, except Computer Equipment",
        "Transportation Equipment",
        "Measuring, Analyzing, and Controlling Instruments; Photographic, Medical and Optical Goods; Watches and Clocks",
        "Miscellaneous Manufacturing Industries"
    ],

    "Transportation & Public Utilities": [
        "Railroad Transportation",
        "Local and Suburban Transit and Interurban Highway Passenger Transportation",
        "Motor Freight Transportation and Warehousing",
        "United States Postal Service",
        "Water Transportation",
        "Transportation by Air",
        "Pipelines, except Natural Gas",
        "Transportation Services",
        "Communications",
        "Electric, Gas and Sanitary Services"
    ],

    "Wholesale Trade": [
        "Wholesale Trade-Durable Goods",
        "Wholesale Trade-Nondurable Goods"
    ],

    "Retail Trade": [
        "Building Materials, Hardware, Garden Supply, and Mobile Home Dealers",
        "General Merchandise Stores",
        "Food Stores",
        "Automotive Dealers and Gasoline Service Stations",
        "Apparel and Accessory Stores",
        "Home Furniture, Furnishings, and Equipment Stores",
        "Eating and Drinking Places",
        "Miscellaneous Retail"
    ],

    "Finance, Insurance, Real Estate": [
        "Depository Institutions",
        "Non-Depository Credit Institutions",
        "Security and Commodity Brokers, Dealers, Exchanges, and Services",
        "Insurance Carriers",
        "Insurance Agents, Brokers and Service",
        "Real Estate",
        "Holding and other Investment Offices"
    ],

    "Services": [
        "Hotels, Rooming Houses, Camps, and other Lodging Places",
        "Personal Services",
        "Business Services",
        "Automotive Repair, Services, and Parking",
        "Miscellaneous Repair Services",
        "Motion Pictures",
        "Amusement and Recreation Services",
        "Health Services",
        "Legal Services",
        "Educational Services",
        "Social Services",
        "Museums, Art Galleries, and Botanical and Zoological Gardens",
        "Membership Organizations",
        "Engineering, Accounting, Research, Management, and Related Services",
        "Private Households",
        "Miscellaneous Services"
    ],

    "Public Administration": [
        "Executive, Legislative, and General Government, except Finance",
        "Justice, Public Order, and Safety",
        "Public Finance, Taxation, and Monetary Policy",
        "Administration of Human Resource Programs",
        "Administration of Environmental Quality and Housing Programs",
        "Administration of Economic Programs",
        "National Security and International Affairs",
        "Nonclassifiable Establishments"
    ]
};


export default function GBAMembershipForm() {
    const [activeSection, setActiveSection] = useState('personal');
    const [completedSections, setCompletedSections] = useState([]);
    const [formData, setFormData] = useState({
        givenName: '',
        familyName: '',
        phone: '',
        prefix: '',
        companyName: '',
        companyLogo: null,
        companyAddress: '',
        country: '',
        industry: '',
        companyEmail: '',
        companyTelephone: '',
        companyWebsite: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',

        visibility: 'publish',
        title: '',
        companyPurpose: '',
        foundingYear: '',
        foundingMonth: '',
        poBox: '',
        postalCode: '',
        city: '',
        state: '',
        employees: '',

        newProject: '',
        specialFocus: '',
        acceptStatutes: false,
        donation: false,
        industryMain: '',
        subIndustry: '',
        customIndustry: '',
        customSubIndustry: ''


    });
    const [contacts, setContacts] = useState([
        {
            prefix: '',
            givenName: '',
            familyName: '',
            title: '',
            mobile: '',
            isPublic: false
        }

    ]);


    const navigate = useNavigate();

    const sections = [
        { id: 'personal', label: 'Personal information' },
        { id: 'company', label: 'Company details' },
        { id: 'management', label: 'Company management' },
        { id: 'information', label: 'Company information' },
        { id: 'membership', label: 'Membership details' },
        { id: 'confirmation', label: 'Confirmation' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleContactChange = (index, field, value) => {
        const updated = [...contacts];
        updated[index][field] = value;
        setContacts(updated);
    };

    const addContact = () => {
        setContacts([
            ...contacts,
            { prefix: '', givenName: '', familyName: '', title: '', mobile: '', isPublic: false }
        ]);
    };


    const removeLastContact = () => {
        if (contacts.length > 1) {
            setContacts(contacts.slice(0, -1));
        }
    };


    const handleContinue = async () => {

        const form = document.querySelector("form");
        if (form && !form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!completedSections.includes(activeSection)) {
            setCompletedSections(prev => [...prev, activeSection]);
        }

        const currentIndex = sections.findIndex(s => s.id === activeSection);

        // ✅ SUBMIT FORM ON LAST STEP
        if (activeSection === 'confirmation') {
            try {
                const fd = new FormData();

                Object.keys(formData).forEach(key => {
                    if (Array.isArray(formData[key])) {
                        formData[key].forEach(v => fd.append(key, v));
                    } else {
                        fd.append(key, formData[key]);
                    }
                });
                fd.append("contacts", JSON.stringify(contacts));

                const response = await fetch(`${API_URL}/api/memberships`, {
                    method: 'POST',
                    body: fd
                });


                const result = await response.json();
                console.log('Saved:', result);
                alert('Form submitted successfully');
            } catch (error) {
                console.error('Submit error:', error);
                alert('Submission failed');
            }
            return;
        }

        if (currentIndex < sections.length - 1) {
            setActiveSection(sections[currentIndex + 1].id);
        }
    };


    const handleGoBack = () => {
        const currentIndex = sections.findIndex(s => s.id === activeSection);
        if (currentIndex > 0) {
            setActiveSection(sections[currentIndex - 1].id);
        }
    };

    const renderPersonalInfo = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-blue-900">Your profile information</h2>
                <p className="text-blue-700">
                    The information that you input below will not be published. GBA will only use it to contact you about the membership application.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-900">First Name</label>
                    <input
                        type="text" required
                        value={formData.givenName}
                        onChange={(e) => handleInputChange('givenName', e.target.value)}
                        className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-900">Last Name</label>
                    <input
                        type="text"
                        value={formData.familyName}
                        onChange={(e) => handleInputChange('familyName', e.target.value)}
                        className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2 text-blue-900">Phone number</label>
                <p className="text-sm text-blue-700 mb-2">
                    The direct line or your mobile phone number that GBA can use to reach you. This information is not going to be published.
                </p>
                <input
                    type="tel" required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );

    const renderCompanyDetails = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Company details</h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Visibility</h3>
                    <div className="space-y-3">
                        <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-100">
                            <input
                                type="radio"
                                name="visibility"
                                checked={formData.visibility === 'publish'}
                                onChange={() => handleInputChange('visibility', 'publish')}
                                className="mt-1 accent-blue-600"
                            />
                            <div>
                                <div className="font-semibold text-blue-900">Publish the information below on GBA member's directory</div>
                                <div className="text-sm text-blue-700">Your company membership and the details that you input on this page will be published on GBA members directory</div>
                            </div>
                        </label>
                        <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-100">
                            <input
                                type="radio" required
                                name="visibility"
                                checked={formData.visibility === 'confidential'}
                                onChange={() => handleInputChange('visibility', 'confidential')}
                                className="mt-1 accent-blue-600"
                            />
                            <div>
                                <div className="font-semibold text-blue-900">Keep the information below confidential</div>
                                <div className="text-sm text-blue-700">Your membership and company details are not published</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Company name</label>
                        <input
                            type="text" required
                            value={formData.companyName}
                            onChange={(e) =>
                                handleInputChange('companyName', e.target.value)
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Company logo</label>
                        <input
                            type="file"
                            accept="image/*"
                            required
                            onChange={(e) =>
                                handleInputChange('companyLogo', e.target.files[0])
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg"
                        />
                    </div>



                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Street address</label>
                        <input
                            type="text" required
                            value={formData.companyAddress}
                            onChange={(e) =>
                                handleInputChange('companyAddress', e.target.value)
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Post Office box number</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Country / Territory */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-blue-900">
                                        Country / Territory
                                    </label>

                                    <input
                                        list="country-list" required
                                        placeholder="Type the first letters"
                                        value={formData.country}
                                        onChange={(e) =>
                                            handleInputChange('country', e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />

                                    <datalist id="country-list">
                                        {countries.map((country) => (
                                            <option key={`${country.code}-${country.name}`} value={country.name} />

                                        ))}
                                    </datalist>
                                </div>
                                {/* Industry */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-blue-900">
                                        Industry
                                    </label>

                                    <input
                                        list="industry-list" required
                                        placeholder="Select industry"
                                        value={formData.industry}
                                        onChange={(e) =>
                                            handleInputChange('industry', e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />


                                </div>
                            </div>

                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">Zip code</label>
                            <input
                                type="text" required
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">City</label>
                            <input
                                type="text" required
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">State / Province</label>
                            <input
                                type="text" required
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Telephone</label>
                        <p className="text-sm text-blue-700 mb-2">
                            Use the international format +[country code][your number]
                        </p>
                        <input
                            type="tel" required
                            value={formData.companyTelephone}
                            onChange={(e) =>
                                handleInputChange('companyTelephone', e.target.value)
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Email</label>
                        <input
                            type="email" required
                            value={formData.companyEmail}
                            onChange={(e) =>
                                handleInputChange('companyEmail', e.target.value)
                            }

                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">Website</label>
                        <p className="text-sm text-blue-700 mb-2">
                            The website address should start with http:// or https://
                        </p>
                        <input
                            type="url" required
                            value={formData.companyWebsite}
                            onChange={(e) =>
                                handleInputChange('companyWebsite', e.target.value)
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    {/* Social Media Accounts */}
                    <div className="space-y-4 mt-6">
                        <h3 className="text-lg font-semibold text-blue-900">
                            Social Media Accounts
                        </h3>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                Facebook
                            </label>
                            <input
                                type="url"
                                placeholder="https://facebook.com/yourpage"
                                value={formData.facebook}
                                onChange={(e) =>
                                    handleInputChange('facebook', e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                Instagram
                            </label>
                            <input
                                type="url"
                                placeholder="https://instagram.com/yourpage"
                                value={formData.instagram}
                                onChange={(e) =>
                                    handleInputChange('instagram', e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                LinkedIn
                            </label>
                            <input
                                type="url"
                                placeholder="https://linkedin.com/company/yourpage"
                                value={formData.linkedin}
                                onChange={(e) =>
                                    handleInputChange('linkedin', e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                X (Twitter)
                            </label>
                            <input
                                type="url"
                                placeholder="https://x.com/yourpage"
                                value={formData.twitter}
                                onChange={(e) =>
                                    handleInputChange('twitter', e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    const renderCompanyManagement = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Company Management</h2>

            {contacts.map((contact, index) => (
                <div key={index} className="border-2 border-blue-200 p-6 rounded-lg bg-blue-50 space-y-6">

                    {/* PREFIX */}
                    <div>
                        <label className="block text-sm font-semibold mb-3 text-blue-900">
                            Honorific prefix
                        </label>
                        <div className="flex gap-4">
                            {["Mr", "Ms"].map(prefix => (
                                <label key={prefix} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`prefix-${index}`}
                                        checked={contact.prefix === prefix}
                                        onChange={() =>
                                            handleContactChange(index, "prefix", prefix)
                                        }
                                        className="accent-blue-600"
                                    />
                                    <span className="font-medium text-blue-900">{prefix}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* NAME */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                First Name
                            </label>
                            <input
                                type="text"
                                required
                                value={contact.givenName}
                                onChange={(e) =>
                                    handleContactChange(index, "givenName", e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                Last Name
                            </label>
                            <input
                                type="text"
                                required
                                value={contact.familyName}
                                onChange={(e) =>
                                    handleContactChange(index, "familyName", e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* JOB ROLE */}
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">
                            Job Role
                        </label>
                        <input
                            type="text"
                            required
                            value={contact.title}
                            onChange={(e) =>
                                handleContactChange(index, "title", e.target.value)
                            }
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* MOBILE NUMBER */}

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">
                            Primary Phone Number (Include country code, e.g. +1)
                        </label>
                        <input
                            type="tel"
                            value={contact.primaryPhone || ""}
                            onChange={(e) =>
                                handleContactChange(index, "primaryPhone", e.target.value)
                            }

                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-semibold mb-2 text-blue-900">
                            Secondary Phone Number (Optional)
                        </label>
                        <input
                            type="tel"
                            value={contact.secondaryPhone || ""}
                            onChange={(e) =>
                                handleContactChange(index, "secondaryPhone", e.target.value)
                            }

                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* PUBLIC / PRIVATE TOGGLE */}
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-blue-200">
                        <div>
                            <p className="font-semibold text-sm text-blue-900">
                                Display mobile number in Members Directory?
                            </p>
                            <p className="text-xs text-blue-700">
                                If private, it will not appear publicly.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                handleContactChange(index, "isPublic", !contact.isPublic)
                            }
                            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${contact.isPublic
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-blue-900 border-2 border-blue-300 hover:bg-blue-50"
                                }`}
                        >
                            {contact.isPublic ? "Public" : "Private"}
                        </button>
                    </div>

                </div>
            ))}

            {/* Buttons */}
            <div className="flex justify-between pt-4 border-t-2 border-blue-200">
                <button
                    type="button"
                    onClick={addContact}
                    className="px-5 py-2.5 border-2 border-blue-300 rounded-lg hover:bg-blue-50 font-medium text-blue-900 transition-colors"
                >
                    + Add a contact
                </button>

                <button
                    type="button"
                    onClick={removeLastContact}
                    disabled={contacts.length === 1}
                    className="px-5 py-2.5 border-2 border-blue-300 rounded-lg hover:bg-blue-50 font-medium text-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    − Remove last contact
                </button>
            </div>
        </div>
    );



    const renderCompanyInformation = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2 text-blue-900">Company information</h2>
                <p className="text-blue-700">Used for internal statistics and determine your membership category.</p>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-3 text-blue-900">Company purpose</label>

            </div>
            {/* INDUSTRY SELECTION */}
            <div className="space-y-6 mt-6">

                {/* Main Industry */}
                <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-900">
                        Industry
                    </label>
                    <select
                        required
                        value={formData.industryMain}
                        onChange={(e) => {
                            handleInputChange("industryMain", e.target.value);
                            handleInputChange("subIndustry", "");
                            handleInputChange("customIndustry", "");
                            handleInputChange("customSubIndustry", "");
                        }}

                        className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select Industry</option>
                        {Object.keys(industryOptions).map((industry) => (
                            <option key={industry} value={industry}>
                                {industry}
                            </option>
                        ))}
                        <option value="Other">Other</option>

                    </select>
                    {formData.industryMain === "Other" && (
                        <div className="mt-3">
                            <label className="block text-sm font-semibold mb-2 text-blue-900">
                                Please specify industry
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.customIndustry}
                                onChange={(e) =>
                                    handleInputChange("customIndustry", e.target.value)
                                }
                                className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg"
                            />
                        </div>
                    )}

                </div>

                {/* Sub Industry */}
                {formData.industryMain && (

                    <div>
                        <label className="block text-sm font-semibold mb-2 text-blue-900">
                            Sub Industry
                        </label>

                        <select
                            required
                            value={formData.subIndustry}
                            onChange={(e) => {
                                handleInputChange("subIndustry", e.target.value);
                                handleInputChange("customSubIndustry", "");
                            }}
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select Sub Industry</option>

                            {industryOptions[formData.industryMain]?.map((sub) => (
                                <option key={sub} value={sub}>
                                    {sub}
                                </option>
                            ))}

                            <option value="Other">Other</option>
                        </select>

                        {/* Custom Sub Industry Input */}
                        {formData.subIndustry === "Other" && (
                            <div className="mt-3">
                                <label className="block text-sm font-semibold mb-2 text-blue-900">
                                    Please specify sub industry
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.customSubIndustry}
                                    onChange={(e) =>
                                        handleInputChange("customSubIndustry", e.target.value)
                                    }
                                    className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm text-blue-900">
                        To become a federated association, get in touch directly with <a href="mailto:info@GBA.org" className="text-blue-600 hover:underline font-semibold">info@GBA.org</a>
                    </p>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2 text-blue-900">Date of company founding</label>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs text-blue-700 mb-1">Year</label>
                        <input
                            type="text"
                            placeholder="YYYY" required
                            value={formData.foundingYear}
                            onChange={(e) => handleInputChange('foundingYear', e.target.value)}
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-blue-700 mb-1">Month</label>
                        <input
                            type="text"
                            placeholder="MM" required
                            value={formData.foundingMonth}
                            onChange={(e) => handleInputChange('foundingMonth', e.target.value)}
                            className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold mb-2 text-blue-900">Number of employees in the company</label>
                <input
                    type="number" required
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>


            <div>
                <label className="block text-sm font-semibold mb-2 text-blue-900">Describe any special areas of focus</label>
                <textarea
                    value={formData.specialFocus}
                    onChange={(e) => handleInputChange('specialFocus', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            {/* NEW PROJECT (OPTIONAL) */}
            <div className="mt-6">
                <label className="block text-sm font-semibold mb-2 text-blue-900">
                    New project (if any)
                </label>
                <p className="text-sm text-blue-700 mb-2">
                    Please describe any new or upcoming project your company is working on.
                </p>
                <input
                    type="text"
                    value={formData.newProject}
                    onChange={(e) => handleInputChange('newProject', e.target.value)}

                    className="w-full px-4 py-2.5 border-2 border-blue-200 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );

    const renderMembershipDetails = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Statutes</h2>

            <div className="space-y-4">
                {/* REQUIRED */}
                <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <input
                        type="checkbox"
                        required
                        checked={formData.acceptStatutes}
                        onChange={(e) => handleInputChange('acceptStatutes', e.target.checked)}
                        className="mt-1 accent-blue-600"
                    />
                    <div>
                        <div className="font-semibold text-blue-900">
                            I have read and accepted the GBA statutes
                        </div>
                        <div className="text-sm text-blue-700">
                            The statutes are <a href="#" className="text-blue-600 hover:underline font-semibold">published</a> online,
                            including <a href="#" className="text-blue-600 hover:underline font-semibold">article 4</a> on Membership.
                        </div>
                    </div>
                </label>

                {/* OPTIONAL */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">
                        Bridging the skills gap: GBA Vocational Training Assistance
                    </h3>

                    <label className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                        <input
                            type="checkbox"
                            checked={formData.donation}
                            onChange={(e) =>
                                handleInputChange('donation', e.target.checked)
                            }
                            className="mt-1 accent-blue-600"
                        />
                        <div className="text-sm text-blue-700">
                            Donation towards technical assistance programmes to eliminate global training disparities
                            (as pursued by the GBA Foundation)
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );


    const renderConfirmation = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Confirmation</h2>
            <p className="text-blue-700">The details of the fees regarding the company membership</p>

            <div className="space-y-4 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <div className="flex justify-between items-start py-3 border-b-2 border-blue-200">
                    <div>
                        <div className="font-semibold text-blue-900">Green - Individual Membership</div>
                        <div className="text-sm text-blue-700">for Freight Forwarder. GBA will validate your membership</div>
                    </div>
                    <div className="font-bold text-blue-900">403 USD</div>
                </div>

                <div className="flex justify-between items-center py-3 border-b-2 border-blue-200">
                    <div className="font-semibold text-blue-900">One time entry fee</div>
                    <div className="font-bold text-blue-900">65 USD</div>
                </div>

                <div className="flex justify-between items-center py-3 border-b-2 border-blue-200">
                    <div className="font-semibold text-blue-900">Package shipping</div>
                    <div className="font-bold text-blue-900">78 USD</div>
                </div>

                <div className="flex justify-between items-center py-4 text-xl font-bold text-blue-900">
                    <div>Total</div>
                    <div>546 USD</div>
                </div>
            </div>
        </div>
    );

    const renderSection = () => {
        switch (activeSection) {
            case 'personal':
                return renderPersonalInfo();
            case 'company':
                return renderCompanyDetails();
            case 'management':
                return renderCompanyManagement();
            case 'information':
                return renderCompanyInformation();
            case 'membership':
                return renderMembershipDetails();
            case 'confirmation':
                return renderConfirmation();
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                
                * {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-80 bg-blue-50 min-h-screen border-r-2 border-blue-200 p-6">
                    <nav className="space-y-2">
                        {sections.map((section, index) => {
                            const isActive = activeSection === section.id;
                            const isCompleted = completedSections.includes(section.id);

                            const lastCompletedIndex = completedSections.length;
                            const canAccess = index <= lastCompletedIndex;

                            return (
                                <button
                                    key={section.id}
                                    disabled={!canAccess}
                                    onClick={() => canAccess && setActiveSection(section.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
        ${isActive ? 'bg-blue-600 text-white border-2 border-blue-700' : 'text-blue-900'}
        ${!canAccess ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-100'}
      `}
                                >

                                    {isCompleted ? (
                                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                                    ) : (
                                        <Circle className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                                    )}
                                    <span className={`text-left ${isActive ? 'font-bold' : 'font-semibold'}`}>
                                        {section.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-white">
                    <form className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border-2 border-blue-100 p-8">
                        {renderSection()}

                        <div className="flex justify-end gap-4 mt-8 pt-6 border-t-2 border-blue-200">
                            {activeSection !== 'personal' && (
                                <button
                                    type="button"
                                    onClick={handleGoBack}
                                    className="px-6 py-2.5 text-blue-900 border-2 border-blue-300 rounded-lg hover:bg-blue-50 font-semibold transition-colors"
                                >
                                    Go back
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => {
                                    if (activeSection === 'confirmation') {
                                        handleContinue();   // submit first
                                        navigate("/client-register");
                                    } else {
                                        handleContinue();
                                    }
                                }}

                                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 font-semibold transition-colors"
                            >

                                {activeSection === 'confirmation' ? 'Payment' : 'Continue'}
                                <span>›</span>
                            </button>
                        </div>
                    </form>
                </main>

            </div>
        </div>
    );
}