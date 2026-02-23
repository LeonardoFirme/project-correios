// src/components/FreightCalculator.tsx
"use client";

import { useState } from "react";
import { FreightResult } from "@/types/freight";

export default function FreightCalculator() {
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
        <div className="flex flex-col gap-8 w-full">
            <form onSubmit={handleCalculate} className="flex flex-col gap-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="origin-cep" className="text-blue-900 font-bold text-sm">
                            CEP de Origem
                        </label>
                        <input
                            id="origin-cep"
                            type="text"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            placeholder="Ex: 01001000"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-900 transition-colors"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="destination-cep" className="text-blue-900 font-bold text-sm">
                            CEP de Destino
                        </label>
                        <input
                            id="destination-cep"
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="Ex: 20040000"
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-900 transition-colors"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-end">
                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <label htmlFor="weight" className="text-blue-900 font-bold text-sm">
                            Peso Estimado (kg)
                        </label>
                        <select
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-900 transition-colors"
                        >
                            <option value="0.3">Até 300g</option>
                            <option value="1">Até 1 kg</option>
                            <option value="2">Até 2 kg</option>
                            <option value="5">Até 5 kg</option>
                            <option value="10">Até 10 kg</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-1/2 px-8 py-3 rounded-md font-bold transition-colors bg-yellow-400 hover:bg-yellow-500 text-blue-900 disabled:opacity-50 shrink-0 h-13"
                    >
                        {loading ? "Calculando..." : "Calcular Frete"}
                    </button>
                </div>
            </form>

            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
            )}

            {result && (
                <div className="mt-4 flex flex-col gap-4">
                    <h2 className="text-lg font-bold text-blue-900 border-b border-gray-200 pb-2">
                        Opções de Envio
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {result.options.map((option, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center hover:border-blue-900 transition-colors">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-900 font-black text-xl italic">{option.service}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-1">{option.price}</h3>
                                <p className="text-gray-600 font-medium">
                                    Entrega em até <span className="font-bold text-gray-800">{option.days} dias úteis</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}