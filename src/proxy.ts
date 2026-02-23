// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Configuração para roteamento seguro e requisições de API de rastreamento
  return NextResponse.next();
}