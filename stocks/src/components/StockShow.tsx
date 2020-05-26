import React from "react";
import Stock from "../types/Stock";
import { TableRow, TableCell, Typography } from "@material-ui/core";

function displayPrice(price: number): string {
  return price !== -1
    ? `$ ${price.toLocaleString("en-US")}`
    : "Error fetching the price";
}

export enum StockShowMode {
  thumbnail = "price",
  tableRow = "tableRow"
}

interface StockShowProps {
  stock: Stock;
  mode: StockShowMode;
}

const StockShow: React.FunctionComponent<StockShowProps> = (
  props: StockShowProps
) => {
  const { stock, mode } = props;

  switch (mode) {
    case StockShowMode.thumbnail:
      return (
        <>
          <Typography variant="h6" id="tableTitle" component="div">
            {stock.ticker}
          </Typography>
          <div>{stock.price && displayPrice(stock.price)}</div>
        </>
      );
    case StockShowMode.tableRow:
      return (
        <TableRow>
          <TableCell>{stock.ticker}</TableCell>
          <TableCell>{`${stock.price && displayPrice(stock.price)}`}</TableCell>
        </TableRow>
      );
    default:
      return <></>;
  }
};

export default StockShow;
