import Box from "@material-ui/core/Box";
import React from "react";
import SiteStripe from "./components/SiteStripe";
import StockTable from "./components/StockTable";

const App: React.FunctionComponent = () => {
  return (
    <>
      <SiteStripe />
      <Box margin={4}>
        <StockTable tickers={["AAPL", "JNJ", "MA", "KO"]} />
      </Box>
    </>
  );
};

export default App;
