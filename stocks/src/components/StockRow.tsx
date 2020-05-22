import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow);

interface StockRowProps {
  ticker: string;
}

const StockRow: React.FunctionComponent<StockRowProps> = ({
  ticker
}: StockRowProps) => {
  return (
    <StyledTableRow key={ticker}>
      <StyledTableCell align="right">{ticker}</StyledTableCell>
      <StyledTableCell align="right">2</StyledTableCell>
      <StyledTableCell align="right">$100</StyledTableCell>
      <StyledTableCell align="right">$200</StyledTableCell>
    </StyledTableRow>
  );
};

export default StockRow;
