// src/types/tracking.ts

export interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
}

export interface TrackingData {
  code: string;
  isDelivered: boolean;
  events: TrackingEvent[];
}