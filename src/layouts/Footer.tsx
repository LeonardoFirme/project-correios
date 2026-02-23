// src/layouts/Footer.tsx
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

export function Footer() {
    return (
        <footer className="w-full mt-auto">
            <div className="bg-white w-full py-12 border-t-8 border-yellow-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-blue-900 text-lg mb-2">Fale Conosco</h4>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Registro de manifestações</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Central de atendimento</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Soluções para o seu negócio</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Ouvidoria</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-blue-900 text-lg mb-2">Sobre os Correios</h4>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Identidade corporativa</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Educação e cultura</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Sustentabilidade</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-blue-900 text-lg mb-2">Informações</h4>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Postalis</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Postal Saúde</a>
                        <a href="#" className="text-sm flex items-center gap-2 text-blue-700 hover:underline"><span className="w-4 h-4 bg-gray-200 block"></span> Loja on Line</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg mb-4">Siga os Correios</h4>
                            <div className="flex gap-4 text-white">
                                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center cursor-pointer hover:opacity-80"><FaYoutube /></div>
                                <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center cursor-pointer hover:opacity-80"><FaInstagram /></div>
                                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:opacity-80"><FaFacebookF /></div>
                                <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center cursor-pointer hover:opacity-80"><FaLinkedinIn /></div>
                                <div className="w-8 h-8 bg-black rounded flex items-center justify-center cursor-pointer hover:opacity-80"><FaTwitter /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-400 py-6 px-4 sm:px-8 border-t border-yellow-500">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-blue-900 font-medium">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p>© Copyright 2026 Correios</p>
                        <p className="mt-1">CNPJ 34.028.316/0001-03</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-3xl font-black italic tracking-tighter text-blue-900">Correios</span>
                        <div className="flex flex-col font-black text-blue-900 uppercase leading-none border-l-2 border-blue-900 pl-4">
                            <span className="text-xs">Governo do</span>
                            <span className="text-2xl tracking-widest">Brasil</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}