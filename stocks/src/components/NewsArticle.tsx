import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  CardMedia,
  CardHeader,
  Box
} from "@material-ui/core";
import { Article } from "../types/Article";

const useStyles = makeStyles({
  media: {
    height: 300
  }
});

function secondsToDate(seconds: number): Date {
  const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCMilliseconds(seconds);
  return d;
}

interface NewsArticleProps {
  article: Article;
}

const NewsArticle: React.FunctionComponent<NewsArticleProps> = (
  props: NewsArticleProps
) => {
  const { article } = props;
  const classes = useStyles();
  return (
    <Card elevation={14}>
      <CardActionArea href={article.url}>
        <CardHeader title={article.headline} />
        <CardMedia className={classes.media} image={article.image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight={"fontWeightMedium"}>{article.summary}</Box>
          </Typography>

          <Box fontWeight={"fontWeightLight"}>
            <Typography variant="body2" color="textSecondary" component="p">
              From {article.source}, on{" "}
              {secondsToDate(parseInt(article.datetime)).toLocaleDateString()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsArticle;
