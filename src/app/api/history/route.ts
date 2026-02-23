// src/app/api/history/route.ts
import { NextRequest, NextResponse } from "next/server";

// Simulação de banco de dados em memória para o escopo do projeto rápido.
// Em produção, substitua por uma chamada real a um banco de dados.
let historyDb: any[] = [];

export async function GET() {
  return NextResponse.json(historyDb);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, status } = body;

    if (!code) {
      return NextResponse.json({ error: "Código é obrigatório." }, { status: 400 });
    }

    const newItem = {
      id: crypto.randomUUID(),
      code,
      status: status || "Consultado",
      date: new Date().toISOString(),
    };

    // Remove duplicatas do mesmo código e insere no topo
    historyDb = historyDb.filter((item) => item.code !== code);
    historyDb.unshift(newItem);

    // Mantém apenas os 5 itens mais recentes no histórico
    if (historyDb.length > 5) {
      historyDb.pop();
    }

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro interno ao salvar histórico." }, { status: 500 });
  }
}