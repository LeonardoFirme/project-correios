// src/hooks/useTracking.ts
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function useTracking() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!code.trim()) return;

        // Em um projeto real, faria a chamada a API aqui ou redirecionaria
        console.log("Buscando código:", code);
        // router.push(`/rastreamento/${code}`);
    };

    return {
        code,
        setCode,
        handleSearch
    };
}