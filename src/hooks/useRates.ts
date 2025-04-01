import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export interface ExchangeRate {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

const fetchRates = async (coin: string): Promise<ExchangeRate | null> => {
  if (!coin) return null;

  try {
    const keyCoin = `${coin}BRL`;
    const response: Record<string, ExchangeRate> = await api.get(`${coin}-BRL`).json();

    return response[keyCoin] || null;
  } catch (error) {
    console.error("Erro ao buscar taxas de câmbio:", error);
    throw new Error("Falha ao buscar as taxas de câmbio");
  }
};

export const useRates = (coin: string) => {
  return useQuery<ExchangeRate | null>({
    queryKey: ["rates", coin],
    queryFn: () => fetchRates(coin),
    enabled: false,
  });
};