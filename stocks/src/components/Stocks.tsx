import React, { useEffect, useState } from "react";
import StockShow, { StockShowMode } from "./StockShow";
import {
  Paper,
  Table,
  TableRow,
  TableBody,
  TableContainer,
  TableHead,
  TableCell,
  Typography,
  Input,
  makeStyles
} from "@material-ui/core";
import { initStock } from "../utils/stockUtil";
import Stock from "../types/Stock";
import stockClient from "../apiClients/stockClient";
import Ratings from "../types/Ratings";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Stocks: React.FunctionComponent = () => {
  const classes = useStyles();
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
  const [stocks, setStocks] = useState<Stock[]>(tickers.map(initStock));

  const refreshPrices = (): void => {
    const priceRequests: Promise<number>[] = [];
    stocks.forEach((stock: Stock) => {
      priceRequests.push(
        stockClient.price(stock.ticker).then((response: number) => response)
      );
    });
    Promise.all(priceRequests).then((prices: number[]) => {
      const newStocks: Stock[] = [];
      stocks.forEach((stock: Stock, i: number) => {
        newStocks.push({ ...stock, price: prices[i] });
      });
      setStocks(newStocks);
    });
  };

  const refreshRatings = (): void => {
    const ratingsRequests: Promise<Ratings>[] = [];
    stocks.forEach((stock: Stock) => {
      ratingsRequests.push(
        stockClient.ratings(stock.ticker).then((response: Ratings) => response)
      )
    })
    Promise.all(ratingsRequests).then((response: Ratings[]) => {
      console.log("ratings:")
      const newStocks: Stock[] = [];
      stocks.forEach((stock: Stock, i: number) => {
        newStocks.push({ ...stock, ratings: response[i] })
      });
    })
  }

  useEffect(() => {
    refreshPrices();
    refreshRatings();
  }, []);

  return (
    <>
      <Typography variant="h6" id="tableTitle" component="div">
        Watchlist
      </Typography>
      <TableContainer component={Paper} elevation={2}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Last Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock: Stock) => {
              return <StockShow stock={stock} mode={StockShowMode.tableRow} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Stocks;
