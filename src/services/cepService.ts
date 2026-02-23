// src/services/cepService.ts
import { CepData } from "@/types/cep";

export async function fetchCep(cep: string): Promise<CepData> {
  const cleanCep = cep.replace(/\D/g, "");
  const response = await fetch(`/api/cep?cep=${cleanCep}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Erro ao buscar CEP.");
  }

  return response.json();
}