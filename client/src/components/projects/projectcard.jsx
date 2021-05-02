import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({ Site, Repo, Title, Description, Img }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Img}
          title="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={Site} target="_blank" rel="noreferrer" >Live Site</a>
        </Button>
        <Button size="small" color="primary">
        <a href={Repo} target="_blank" rel="noreferrer" >Repo</a>
        </Button>
      </CardActions>
    </Card>
  );
}
