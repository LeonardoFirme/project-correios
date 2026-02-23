// src/components/TrackingSearchBox.tsx
"use client";

import { useTracking } from "@/hooks/useTracking";
import { FaBoxOpen } from "@react-icons/all-files/fa/FaBoxOpen";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export function TrackingSearchBox() {
    const { code, setCode, handleSearch } = useTracking();

    return (
        <div className="w-full flex items-center gap-4">
            <div className="text-blue-700">
                <FaBoxOpen className="w-12 h-12" />
            </div>
            <form onSubmit={handleSearch} className="w-full">
                <h3 className="text-blue-700 font-bold text-xl mb-2">Acompanhe seu Objeto</h3>
                <div className="relative">
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="AA123456789BR ou 000.111.222.33"
                        className="w-full border border-gray-300 rounded p-3 pr-12 focus:outline-none focus:border-blue-500 text-gray-700"
                    />
                    <button type="submit" className="absolute right-3 top-3 text-blue-700 hover:text-blue-900 transition-colors">
                        <FaSearch className="w-6 h-6" />
                    </button>
                </div>
            </form>
        </div>
    );
}