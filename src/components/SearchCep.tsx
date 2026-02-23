// src/components/SearchCep.tsx
"use client";

import { useState } from "react";
import { CepData } from "@/types/cep";

export default function SearchCep() {
    const [cep, setCep] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<CepData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!cep) return;

        setLoading(true);
        setResult(null);
        setError(null);

        // Remove caracteres não numéricos
        const cleanCep = cep.replace(/\D/g, "");

        if (cleanCep.length !== 8) {
            setError("Por favor, introduza um CEP válido com 8 dígitos.");
            setLoading(false);
            return;
        }

        try {
            // Faz a chamada à nossa rota dinâmica real
            const response = await fetch(`/api/cep?cep=${cleanCep}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Não foi possível encontrar o CEP.");
            }

            const data = await response.json();
            setResult(data);
        } catch (err: any) {
            setError(err.message || "Ocorreu um erro inesperado ao procurar o CEP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 w-full items-end">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="cep-code" className="text-blue-900 font-bold text-sm">
                        Introduza um CEP
                    </label>
                    <input
                        id="cep-code"
                        type="text"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Ex: 01001000"
                        className="w-full px-4 py-4 rounded-md border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-900 transition-colors"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 rounded-md font-bold transition-colors bg-yellow-400 hover:bg-yellow-500 text-blue-900 disabled:opacity-50 h-full shrink-0"
                >
                    {loading ? "Aguarde..." : "Pesquisar"}
                </button>
            </form>

            {/* Alerta de Erro */}
            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <span className="text-red-500 font-bold text-lg">!</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabela de Resultados */}
            {result && (
                <div className="mt-4 bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="bg-blue-900 px-4 py-3">
                        <h2 className="text-white font-bold">Resultado da Pesquisa</h2>
                    </div>
                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200 text-blue-900 text-sm">
                                    <th className="p-4 font-bold">Logradouro/Nome</th>
                                    <th className="p-4 font-bold">Bairro/Distrito</th>
                                    <th className="p-4 font-bold">Localidade/UF</th>
                                    <th className="p-4 font-bold">CEP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100 text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                                    <td className="p-4">{result.logradouro} {result.complemento && ` - ${result.complemento}`}</td>
                                    <td className="p-4">{result.bairro}</td>
                                    <td className="p-4">{result.localidade}/{result.uf}</td>
                                    <td className="p-4 font-bold">{result.cep}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}