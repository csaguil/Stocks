import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import NewsArticle from "./NewsArticle";
import { Article } from "../types/Article";
import stockClient from "../apiClients/stockClient";

const language = "en";

const News: React.FunctionComponent = () => {
  const tickers = [
    "BLK",
    "MA",
    "V",
    "AAPL",
    "AMZN",
    "MSFT",
    "VOO",
    "JNJ",
    "TWLO",
    "DDOG"
  ];
  const [articles, setArticles] = useState<Article[]>([]);

  const refresh = (): void => {
    const newsRequests: Promise<Article[]>[] = [];
    tickers.forEach((ticker: string) => {
      newsRequests.push(
        stockClient.news(ticker, 1, language).then((response: Article[]) => {
          return response;
        })
      );
    });
    Promise.all(newsRequests).then((articles: Article[][]) => {
      setArticles(
        articles.flat().sort((a, b) => (a.datetime < b.datetime ? 1 : -1))
      );
    });
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <Typography variant="h6" color="inherit">
        News
      </Typography>
      {articles.map((article: Article) => {
        return <NewsArticle article={article} />;
      })}
    </>
  );
};

export default News;
