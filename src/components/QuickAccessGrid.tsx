// src/components/QuickAccessGrid.tsx
import Link from "next/link";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaBuilding } from "@react-icons/all-files/fa/FaBuilding";
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { FaStore } from "@react-icons/all-files/fa/FaStore";
import { FaBoxOpen } from "react-icons/fa";

export function QuickAccessGrid() {
    const items = [
        { title: "Preços e Prazos", icon: FaDollarSign, link: "/precos-prazos" },
        { title: "Mais Correios", icon: FaBoxOpen, link: "#" }, // Substitua FaBoxOpen por um import válido se desejar
        { title: "App Correios", icon: FaMobileAlt, link: "#" },
        { title: "Busca CEP ou Endereço", icon: FaMapMarkerAlt, link: "/busca-cep" },
        { title: "Correios Empresas", icon: FaBuilding, link: "#" },
        { title: "Desconfiou de fraude?", icon: FaShieldAlt, link: "#" },
        { title: "Minhas Importações", icon: FaGlobe, link: "#" },
        { title: "Encontre sua agência", icon: FaStore, link: "#" },
    ];

    return (
        <section className="w-full bg-white pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-xl font-bold text-blue-900 mb-8 border-b-4 border-yellow-400 inline-block pb-1">
                    Acesso rápido
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link key={index} href={item.link} className="flex flex-col items-center gap-3 cursor-pointer group">
                                <div className="text-blue-700 group-hover:text-blue-900 transition-colors">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <span className="text-xs font-semibold text-blue-700">{item.title}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}