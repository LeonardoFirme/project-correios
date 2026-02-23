// src/app/(pages)/precos-prazos/page.tsx
import FreightCalculator from "@/components/FreightCalculator";
import Link from "next/link";

export default function PrecosPrazosPage() {
    return (
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 mt-10 mb-12">
            <div className="bg-blue-900 text-white p-8">
                <div className="flex items-center gap-4 mb-2">
                    <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm flex items-center gap-1">
                        <span>&larr;</span> Voltar
                    </Link>
                    <h1 className="text-3xl font-bold border-l-2 border-yellow-400 pl-4">Preços e Prazos</h1>
                </div>
                <p className="text-blue-100 text-sm sm:text-base mt-4">
                    Calcule o valor e o prazo de entrega da sua encomenda (PAC ou SEDEX).
                </p>
            </div>

            <div className="p-6 sm:p-10">
                <FreightCalculator />
            </div>
        </div>
    );
}