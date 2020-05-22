import Box from "@material-ui/core/Box";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StockRow from "./StockRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface StockTableProps {
  tickers: string[];
}

const StockTable: React.FunctionComponent<StockTableProps> = (
  props: StockTableProps
) => {
  const { tickers } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Ticker</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickers.map((ticker: string) => (
            <StockRow ticker={ticker} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
