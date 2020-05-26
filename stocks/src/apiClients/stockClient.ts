import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import axios, { AxiosResponse } from "axios";
import { Article } from "../types/Article";
import Ratings from "../types/Ratings";
const API_KEY = "pk_0bb0ad8725ad4637a0f6d64105605e61";
const baseUrl = "https://cloud.iexapis.com/stable/stock";

function priceUrl(ticker: string): string {
  return `${baseUrl}/${ticker}/quote/latestPrice?token=${API_KEY}`;
}

function newsUrl(ticker: string, count: number): string {
  return `${baseUrl}/${ticker}/news/last/${count}?token=${API_KEY}`;
}

function ratingsUrl(ticker: string): string {
    return `${baseUrl}/${ticker}/recommendation-trends?token=${API_KEY}`;
}

const stockClient = {
  price: async (ticker: string): Promise<number> => {
    return await axios
      .get(priceUrl(ticker))
      .then((response: AxiosResponse<any>) => {
        return parseInt(response.data);
      });
  },
  news: (ticker: string, count: number, lang: string): Promise<Article[]> => {
    return axios
      .get(newsUrl(ticker, count))
      .then((response: AxiosResponse<Article[]>) => {
        return response.data.filter(
          (article: Article) => article.lang === lang
        );
      });
  },
  ratings: (ticker: string): Promise<Ratings> => {
      return axios
        .get(ratingsUrl(ticker))
        .then((response: AxiosResponse<Ratings>) => {
            return response.data;
        })
  }
};

export default stockClient;
