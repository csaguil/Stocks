import Ratings from "./Ratings";

export default interface Stock {
  ticker: string;
  quantity: number;
  price: number | null;
  ratings: Ratings;
}

export const defaultStock: Stock = {
  ticker: "",
  quantity: 0,
  price: null,
  ratings: [],
};
