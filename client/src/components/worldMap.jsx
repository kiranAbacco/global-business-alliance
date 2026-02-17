import React from 'react';

const WorldMap = ({ onCountryClick }) => {
    // This would be an interactive world map component
    // For simplicity, I'm just creating a placeholder
    return (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-4">
                Interactive World Map
            </div>
            <div className="text-sm text-gray-400">
                Click on a country to view members
            </div>
            <div className="mt-4 grid grid-cols-6 gap-2">
                {/* Placeholder for country regions */}
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-8 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
                        onClick={() => onCountryClick('country' + i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorldMap;