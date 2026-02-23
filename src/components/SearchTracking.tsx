// src/components/SearchTracking.tsx
"use client";

import { useState, useEffect } from "react";
import { TrackingData } from "@/types/tracking";
import { TrackingHistoryItem } from "@/types/history";
import { fetchTracking } from "@/services/trackingService";
import { getHistory, saveHistory } from "@/services/historyService";
import { FaBoxOpen } from "@react-icons/all-files/fa/FaBoxOpen";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export default function SearchTracking() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<TrackingData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<TrackingHistoryItem[]>([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const data = await getHistory();
        setHistory(data);
    };

    const executeSearch = async (searchCode: string) => {
        if (!searchCode) return;

        setLoading(true);
        setResult(null);
        setError(null);

        try {
            const data = await fetchTracking(searchCode);
            setResult(data);

            const latestStatus = data.events.length > 0 ? data.events[0].status : "Buscado";

            await saveHistory({ code: data.code, status: latestStatus });
            await loadHistory();

        } catch (err: any) {
            setError(err.message || "Ocorreu um erro ao buscar o rastreamento.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        await executeSearch(code);
    };

    const handleHistoryClick = (historyCode: string) => {
        setCode(historyCode);
        executeSearch(historyCode);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {/* Input Visual Alinhado com o Print */}
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="text-blue-700 hidden sm:block">
                    <FaBoxOpen className="w-12 h-12" />
                </div>
                <div className="w-full">
                    <h3 className="text-blue-700 font-bold text-xl mb-2">Acompanhe seu Objeto</h3>
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value.toUpperCase())}
                            placeholder="AA123456789BR ou 000.111.222.33"
                            className="w-full border border-gray-300 rounded p-3 pr-12 focus:outline-none focus:border-blue-500 text-gray-700"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-3 top-3 text-blue-700 hover:text-blue-900 transition-colors disabled:opacity-50"
                        >
                            <FaSearch className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Histórico Recente */}
            {history.length > 0 && !result && !loading && (
                <div className="w-full lg:pl-16 mt-2">
                    <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Buscas Recentes</p>
                    <div className="flex flex-wrap gap-2">
                        {history.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleHistoryClick(item.code)}
                                className="flex flex-col items-start px-3 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded text-left transition-colors"
                            >
                                <span className="font-bold text-blue-900 text-sm leading-tight">{item.code}</span>
                                <span className="text-xs text-gray-500 leading-tight">{item.status}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Alerta de Erro */}
            {error && (
                <div className="w-full lg:pl-16">
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded shadow-sm flex items-center gap-3">
                        <span className="text-red-500 font-bold text-lg">!</span>
                        <p className="text-sm text-red-700 font-medium">{error}</p>
                    </div>
                </div>
            )}

            {/* Timeline de Resultados */}
            {result && (
                <div className="w-full lg:pl-16 mt-4">
                    <div className="bg-white p-6 rounded border border-gray-200 shadow-sm flex flex-col gap-6">
                        <h2 className="text-lg font-bold text-blue-900 border-b border-gray-100 pb-2">
                            Objeto: {result.code}
                        </h2>

                        <div className="flex flex-col gap-6 relative">
                            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-yellow-400"></div>

                            {result.events.map((item, index) => (
                                <div key={index} className="flex gap-4 relative z-10">
                                    <div className="flex flex-col items-center mt-1.5">
                                        <div className="w-6 h-6 rounded-full border-4 border-yellow-400 bg-white shrink-0"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-full bg-gray-50 border border-gray-100 p-3 rounded">
                                        <h3 className="text-base font-bold text-blue-900">{item.status}</h3>
                                        <p className="text-xs font-semibold text-gray-700">{item.location}</p>
                                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                                        <div className="flex gap-2 mt-2 pt-2 border-t border-gray-200 font-mono text-xs text-gray-400">
                                            <span>{item.date}</span>
                                            <span>|</span>
                                            <span>{item.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}