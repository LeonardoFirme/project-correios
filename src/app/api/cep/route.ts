// src/app/api/cep/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const cep = searchParams.get("cep");

  // Validação inicial
  if (!cep) {
    return NextResponse.json({ error: "CEP não fornecido." }, { status: 400 });
  }

  // Limpeza de caracteres especiais
  const cleanCep = cep.replace(/\D/g, "");

  if (cleanCep.length !== 8) {
    return NextResponse.json({ error: "Formato de CEP inválido. Certifique-se de que tem 8 dígitos." }, { status: 400 });
  }

  try {
    // Chamada à API pública do ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`, {
      method: "GET",
      // Garante a obtenção de dados sempre atualizados
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Falha na comunicação com o serviço de CEP.");
    }

    const data = await response.json();

    // O ViaCEP devolve "erro: true" quando o formato é válido mas o CEP não existe
    if (data.erro) {
      return NextResponse.json({ error: "O CEP introduzido não foi encontrado na base de dados." }, { status: 404 });
    }

    // Mapeamento para a nossa interface CepData
    return NextResponse.json({
      cep: data.cep,
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Ocorreu um erro interno ao procurar o CEP. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}