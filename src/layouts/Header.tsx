// src/layouts/Header.tsx
import Link from "next/link";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export function Header() {
    return (
        <>
            <div className="w-full bg-gray-100 border-b border-gray-200 py-1 px-4 sm:px-8 text-xs font-medium text-blue-700">
                <div className="max-w-7xl mx-auto flex justify-start">
                    <button className="flex items-center gap-1 hover:underline">
                        Acessibilidade <MdKeyboardArrowDown className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <header className="w-full bg-white py-4 px-4 sm:px-8 z-40 shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Logo em SVG simplificado do pacote ou mantido nativo para performance extrema do LCP */}
                        <svg className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-3xl font-black text-blue-900 tracking-tighter">
                            Correios
                        </span>
                    </Link>

                    <nav className="hidden lg:flex gap-6 text-blue-600 font-medium text-sm">
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Enviar</Link>
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Receber</Link>
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Comprar</Link>
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Logística</Link>
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Atendimento</Link>
                        <Link href="#" className="hover:text-blue-800 hover:underline transition-colors">Acesso à Informação</Link>
                    </nav>

                    <div className="flex items-center gap-6 border-l border-gray-200 pl-6">
                        <button className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-medium text-left">
                            <div className="bg-orange-100 p-2 rounded-md text-orange-600">
                                <FaUserAlt className="w-4 h-4" />
                            </div>
                            <span className="leading-tight">Faça Login<br />ou Cadastre-se</span>
                        </button>
                        <button className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium">
                            <FaSearch className="w-5 h-5 text-yellow-400" />
                            Busca
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}