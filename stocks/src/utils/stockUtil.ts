import Stock from "../types/Stock";

export function initStock(ticker: string): Stock {
  return {
    ticker,
    quantity: 0,
    price: null,
    ratings: [],
  };
}
