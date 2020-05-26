import React, { SetStateAction, Dispatch } from "react";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Stock from "../types/Stock";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface StockTableProps {
  stocks: Stock[];
  setStocks: Dispatch<SetStateAction<Stock[]>>;
}

const StockTable: React.FunctionComponent<StockTableProps> = (
  props: StockTableProps
) => {
  const classes = useStyles();
  const { stocks, setStocks } = props;
  return (
    <>
      <Typography variant="h6" id="tableTitle" component="div">
        Watchlist
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Last Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks.map((stock: Stock) => {
              return (
                <TableRow>
                  <TableCell>
                    <Input
                      defaultValue={stock.ticker}
                      onChange={event => {
                        for (let i = 0; i < stocks.length; i++) {
                          if (stocks[i] === stock) {
                            const newStocks = stocks.slice();
                            newStocks[i] = {
                              ...stock,
                              ticker: event.target.value
                            };
                            setStocks(newStocks);
                            console.log("in the table row");
                            console.log(stocks);
                            return;
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>{stock.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StockTable;
