// src/app/api/freight/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const weight = searchParams.get("weight");

  if (!origin || !destination || !weight) {
    return NextResponse.json({ error: "CEP de origem, destino e peso são obrigatórios." }, { status: 400 });
  }

  const cleanOrigin = origin.replace(/\D/g, "");
  const cleanDestination = destination.replace(/\D/g, "");

  if (cleanOrigin.length !== 8 || cleanDestination.length !== 8) {
    return NextResponse.json({ error: "Os CEPs devem conter 8 dígitos." }, { status: 400 });
  }

  // Simulação de cálculo de frete
  // Em um cenário real, integraria com o webservice dos Correios ou Melhor Envio
  const basePrice = parseFloat(weight) * 15.5;

  const result = {
    origin: cleanOrigin,
    destination: cleanDestination,
    options: [
      {
        service: "PAC",
        price: `R$ ${(basePrice * 1.2).toFixed(2).replace(".", ",")}`,
        days: 8,
      },
      {
        service: "SEDEX",
        price: `R$ ${(basePrice * 2.5).toFixed(2).replace(".", ",")}`,
        days: 3,
      }
    ]
  };

  return NextResponse.json(result);
}