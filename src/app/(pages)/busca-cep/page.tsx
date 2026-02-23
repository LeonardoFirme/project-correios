// src/app/(pages)/busca-cep/page.tsx
import SearchCep from "@/components/SearchCep";
import Link from "next/link";

export default function BuscaCepPage() {
    return (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 mt-10 mb-12">
            <div className="bg-blue-900 text-white p-8">
                <div className="flex items-center gap-4 mb-2">
                    <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm flex items-center gap-1">
                        <span>&larr;</span> Voltar
                    </Link>
                    <h1 className="text-3xl font-bold border-l-2 border-yellow-400 pl-4">Busca CEP</h1>
                </div>
                <p className="text-blue-100 text-sm sm:text-base mt-4">
                    Faça a busca por CEP ou por endereço para encontrar a localidade desejada.
                </p>
            </div>

            <div className="p-6 sm:p-10">
                <SearchCep />
            </div>
        </div>
    );
}