// src/types/freight.ts

export interface FreightOption {
  service: string;
  price: string;
  days: number;
}

export interface FreightResult {
  origin: string;
  destination: string;
  options: FreightOption[];
}