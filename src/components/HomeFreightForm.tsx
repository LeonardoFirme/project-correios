// src/components/HomeFreightForm.tsx
"use client";

import { useState } from "react";
import { FreightResult } from "@/types/freight";
import { FaBox } from "@react-icons/all-files/fa/FaBox";

export function HomeFreightForm() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [weight, setWeight] = useState("1");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<FreightResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        setError(null);

        try {
            const response = await fetch(`/api/freight?origin=${origin}&destination=${destination}&weight=${weight}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erro ao calcular o frete.");
            }

            const data = await response.json();
            setResult(data);
        } catch (err: any) {
            setError(err.message || "Ocorreu um erro inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full lg:w-2/3 bg-gray-50 rounded p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Agilize suas postagens no site ou app Correios!</h2>
            <p className="text-blue-700 text-sm mb-6">E entregue sua encomenda em uma de nossas agências.</p>

            <form onSubmit={handleCalculate} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-blue-700 font-bold text-sm mb-1">Origem (CEP)</label>
                        <input
                            type="text"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            placeholder="Informe o CEP"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 text-gray-800"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-blue-700 font-bold text-sm mb-1">Destino (CEP)</label>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="Informe o CEP"
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 text-gray-800"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <FaBox className="w-10 h-10 text-blue-700 shrink-0 hidden sm:block" />
                    <div className="w-full flex flex-col">
                        <label className="text-blue-700 font-bold text-xs mb-1">Peso Estimado da Encomenda</label>
                        <select
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-blue-500 w-full text-gray-800 bg-white"
                        >
                            <option value="0.3">Até 300g</option>
                            <option value="1">Até 1 kg</option>
                            <option value="2">Até 2 kg</option>
                            <option value="5">Até 5 kg</option>
                        </select>
                    </div>
                </div>

                {error && <p className="text-sm text-red-600 font-bold mt-2">{error}</p>}

                {result && (
                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                        {result.options.map((opt, i) => (
                            <div key={i} className="bg-white border border-gray-200 p-3 rounded text-center">
                                <span className="block font-black text-blue-900 text-lg italic">{opt.service}</span>
                                <span className="block font-bold text-blue-700">{opt.price}</span>
                                <span className="block text-xs text-gray-500">{opt.days} dias úteis</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-4">
                    <a href="/precos-prazos" className="text-blue-700 text-sm font-semibold hover:underline">Simule aqui outros serviços.</a>
                    <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors disabled:opacity-50">
                        {loading ? "Calculando..." : "Calcular Frete"}
                    </button>
                </div>
            </form>
        </div>
    );
}