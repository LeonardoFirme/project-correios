// src/services/historyService.ts
import { TrackingHistoryItem } from "@/types/history";

export async function getHistory(): Promise<TrackingHistoryItem[]> {
  try {
    const response = await fetch("/api/history");
    if (!response.ok) return [];
    return response.json();
  } catch {
    return [];
  }
}

export async function saveHistory(data: { code: string; status: string }): Promise<void> {
  try {
    await fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Falha ao salvar no histórico", error);
  }
}