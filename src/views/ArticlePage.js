import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ArticlesContext } from "../state/context/articles.context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ArticlePage() {
  const params = useParams();
  const articlesList = useContext(ArticlesContext);
  const article = articlesList.filter(
    (el) => el.id.toString() === params.id
  )[0];

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={article.img ? article.img : "/images/default-bg.jpg"}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArticlePage;
