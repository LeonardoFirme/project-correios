// src/services/trackingService.ts
import { TrackingData } from "@/types/tracking";

export async function fetchTracking(code: string): Promise<TrackingData> {
  const response = await fetch(`/api/tracking?code=${code}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Erro ao buscar rastreamento.");
  }

  return response.json();
}