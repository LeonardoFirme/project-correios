// src/app/api/tracking/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Código de rastreio não fornecido." }, { status: 400 });
  }

  try {
    // NOTA: Para produção, crie uma conta no linketrack.com e use suas credenciais no .env
    // Aqui estamos usando os dados de teste públicos da documentação deles
    const user = "teste";
    const token = "1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f";

    const response = await fetch(
      `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${code}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // O cache depende da sua estratégia. 'no-store' garante dados frescos.
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error("Falha na comunicação com a API de rastreio.");
    }

    const data = await response.json();

    // A API deles retorna uma estrutura diferente.
    // Precisamos mapear para a NOSSA interface (TrackingData) para o front-end não quebrar.
    const formattedData = {
      code: data.codigo,
      // Verifica se o último evento indica entrega
      isDelivered: data.eventos.length > 0 && data.eventos[0].status.toLowerCase().includes("entregue"),
      events: data.eventos.map((evento: any) => ({
        date: evento.data,
        time: evento.hora,
        location: evento.local,
        status: evento.status,
        description: evento.subStatus && evento.subStatus.length > 0 ? evento.subStatus[0] : "",
      }))
    };

    return NextResponse.json(formattedData);

  } catch (error) {
    return NextResponse.json(
      { error: "Não foi possível rastrear o objeto no momento. Verifique o código e tente novamente." },
      { status: 500 }
    );
  }
}