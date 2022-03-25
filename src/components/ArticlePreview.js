import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ArticlePreview({ article }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <CardActions>
        <Link to={`/articles/single-article/${article.id}`} content={article}>
          <Button size="small" variant="filled">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ArticlePreview;
