import Box from "@material-ui/core/Box";
import React from "react";
import SiteStripe from "./components/SiteStripe";
import Stocks from "./components/Stocks";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import News from "./components/News";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <SiteStripe />
      <div className={classes.root}>
        <Box margin={3}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <div className={classes.paper}><News/></div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.paper}><Stocks/></div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default App;
