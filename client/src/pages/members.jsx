import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_BASE_URL;
export default function FIATAMembersDirectory() {
    const svgRef = useRef(null);

    const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [industries, setIndustries] = useState([]);
    const [industryCountries, setIndustryCountries] = useState([]);

    // 🔍 Mouse wheel zoom
    useEffect(() => {
        const container = svgRef.current?.parentElement;
        if (!container) return;

        const wheelHandler = (e) => {
            e.preventDefault();

            const zoomSpeed = 0.001;
            const delta = -e.deltaY * zoomSpeed;

            setTransform(prev => ({
                ...prev,
                scale: Math.min(Math.max(prev.scale + delta, 0.8), 5)
            }));
        };

        container.addEventListener('wheel', wheelHandler, { passive: false });

        return () => {
            container.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    useEffect(() => {
        const fetchIndustries = async () => {
            try {
                const params = selectedCountry
                    ? `?country=${encodeURIComponent(selectedCountry)}`
                    : '';

                const res = await fetch(
                    `${API_URL}/api/memberships/industries${params}`
                );

                const data = await res.json();
                setIndustries(data);
            } catch (err) {
                console.error('Failed to load industries', err);
            }
        };

        fetchIndustries();
    }, [selectedCountry]);

    useEffect(() => {
        const fetchCountriesByIndustry = async () => {
            if (!selectedIndustry) {
                setIndustryCountries([]);
                return;
            }

            try {
                const res = await fetch(
                    `${API_URL}/api/memberships/countries?industry=${encodeURIComponent(selectedIndustry)}`
                );
                const data = await res.json();
                setIndustryCountries(data);
            } catch (err) {
                console.error('Failed to load countries by industry', err);
            }
        };

        fetchCountriesByIndustry();
    }, [selectedIndustry]);

    // ➕➖ Zoom buttons
    const zoomIn = () => {
        setTransform(prev => ({
            ...prev,
            scale: Math.min(prev.scale + 0.2, 5)
        }));
    };

    const zoomOut = () => {
        setTransform(prev => ({
            ...prev,
            scale: Math.max(prev.scale - 0.2, 0.8)
        }));
    };

    const resetZoom = () => {
        setTransform({ x: 0, y: 0, scale: 1 });
    };

    const countries = [
        { code: 'af', name: 'Afghanistan' },
        { code: 'al', name: 'Albania' },
        { code: 'dz', name: 'Algeria' },
        { code: 'ao', name: 'Angola' },
        { code: 'ar', name: 'Argentina' },
        { code: 'am', name: 'Armenia' },
        { code: 'au', name: 'Australia' },
        { code: 'at', name: 'Austria' },
        { code: 'az', name: 'Azerbaijan' },
        { code: 'bh', name: 'Bahrain' },
        { code: 'bd', name: 'Bangladesh' },
        { code: 'bb', name: 'Barbados' },
        { code: 'by', name: 'Belarus' },
        { code: 'be', name: 'Belgium' },
        { code: 'bt', name: 'Bhutan' },
        { code: 'bo', name: 'Bolivia' },
        { code: 'ba', name: 'Bosnia and Herzegovina' },
        { code: 'br', name: 'Brazil' },
        { code: 'bn', name: 'Brunei' },
        { code: 'bg', name: 'Bulgaria' },
        { code: 'bi', name: 'Burundi' },
        { code: 'kh', name: 'Cambodia' },
        { code: 'cm', name: 'Cameroon' },
        { code: 'ca', name: 'Canada' },
        { code: 'cl', name: 'Chile' },
        { code: 'cn', name: 'China' },
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

    const navigate = useNavigate();

    const handleCountrySelect = (countryName) => {
        setSelectedCountry(countryName);
        const slug = countryName
            .toLowerCase()
            .replace(/\s+/g, "-");

        navigate(`/members/country/${slug}`);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - transform.x,
            y: e.clientY - transform.y
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        setTransform(prev => ({
            ...prev,
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        }));
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(res => res.json())
            .then(data => {
                const countriesGeo = feature(data, data.objects.countries);

                const projection = d3.geoMercator()
                    .scale(300)
                    .translate([1000, 430]);

                const path = d3.geoPath().projection(projection);

                svg.append('rect')
                    .attr('width', 2000)
                    .attr('height', 857)
                    .attr('fill', '#E8E8E8');

                svg.append('g')
                    .selectAll('path')
                    .data(countriesGeo.features)
                    .join('path')
                    .attr('d', path)
                    .attr('fill', d => {
                        if (!selectedIndustry) return '#17A2B8';

                        return industryCountries.includes(d.properties.name)
                            ? '#0e7490'
                            : '#CBD5E1';
                    })
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 0.5)
                    .style('cursor', 'pointer')
                    .on('click', (_, d) => {
                        handleCountrySelect(d.properties.name);
                    });
            });
    }, [industryCountries, selectedIndustry]);

    return (
        <div className="h-screen overflow-hidden bg-white relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Container */}
            <div className="relative h-full flex flex-col">
                {/* Header with Controls */}
                <div className="px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto">
                        {/* Title Row */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                                    Global Members Directory
                                </h1>
                                <p className="text-sm text-gray-600 mt-1">Explore our worldwide network of freight forwarding associations</p>
                            </div>
                            <div className="text-right text-xs text-gray-500">
                                <p className="xl:hidden">Scroll to zoom • Click ocean to pan</p>
                                <p className="hidden xl:block">Scroll to zoom • Click and drag to pan</p>
                            </div>
                        </div>

                        {/* Filter Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Country dropdown */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Select Territory
                                </label>
                                <select
                                    value={selectedCountry}
                                    onChange={(e) => handleCountrySelect(e.target.value)}
                                    className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-50 cursor-pointer"
                                >
                                    <option value="">All territories</option>
                                    {countries
                                        .filter(country =>
                                            !selectedIndustry ||
                                            industryCountries.includes(country.name)
                                        )
                                        .map(country => (
                                            <option key={country.name} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Industry dropdown */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Industry Filter
                                </label>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:bg-gray-50 cursor-pointer"
                                >
                                    <option value="">All industries</option>
                                    {industries.map(industry => (
                                        <option key={industry} value={industry}>
                                            {industry}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive World Map */}
                <div className="flex-1 p-6 relative bg-gray-50">
                    <div className="max-w-7xl mx-auto h-full">
                        <div
                            className="relative h-full overflow-hidden rounded-3xl shadow-xl bg-white border border-gray-200 group"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            {/* Zoom Controls */}
                            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                <button
                                    onClick={zoomIn}
                                    className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-xl px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-gray-300"
                                    title="Zoom In"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>

                                <button
                                    onClick={zoomOut}
                                    className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-xl px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-gray-300"
                                    title="Zoom Out"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                                    </svg>
                                </button>

                                <button
                                    onClick={resetZoom}
                                    className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-xl px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-gray-300"
                                    title="Reset View"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </button>
                            </div>

                            {/* Map SVG */}
                            <svg
                                ref={svgRef}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2000 857"
                                className="w-full h-full"
                                style={{
                                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                                    transformOrigin: 'center',
                                    transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                                }}
                            >
                                <rect width="2000" height="857" fill="#E8E8E8" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto text-center text-xs text-gray-500">
                        © 2026 GBA International Federation of Freight Forwarders Associations
                    </div>
                </div>
            </div>

            <style >{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}