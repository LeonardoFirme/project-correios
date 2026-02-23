// src/components/DynamicBanner.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function DynamicBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array de objetos com as imagens e textos.
    // Você pode alterar os textos secundários conforme precisar.
    const slides = [
        {
            id: 1,
            image: "/banners/1.png",
            title: "Conheça o Mais Correios",
            description: "Praticidade e segurança para comprar online.",
        },
        {
            id: 2,
            image: "/banners/2.png",
            title: "Soluções Empresariais",
            description: "Logística completa para impulsionar o seu negócio.",
        },
        {
            id: 3,
            image: "/banners/3.png",
            title: "App Oficial Correios",
            description: "Rastreio, postagem e serviços na palma da sua mão.",
        },
    ];

    // Efeito para trocar o slide automaticamente a cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="w-full h-120 relative overflow-hidden bg-blue-900 border-b-4 border-yellow-400 group">
            {/* Container de Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Imagem de Fundo Otimizada */}
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover object-center"
                        priority={index === 0} // Carrega a primeira imagem com prioridade
                    />

                    {/* Overlay escuro opcional para garantir a leitura do texto sobre imagens claras */}
                    <div className="absolute inset-0 bg-black/5"></div>

                    {/* Conteúdo de Texto */}
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">
                            {slide.title}
                        </h2>
                        <p className="text-lg sm:text-xl font-medium drop-shadow-md">
                            {slide.description}
                        </p>
                    </div> */}
                </div>
            ))}

            {/* Botões de Navegação Inferior (Bullets) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "bg-yellow-400 w-8" // Expande o bullet ativo
                            : "bg-white/60 hover:bg-white"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
}