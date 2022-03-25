import { useContext } from "react";
import ArticlePreview from "../components/ArticlePreview";
import { ArticlesContext } from "../state/context/articles.context";
import Grid from "@mui/material/Grid";

function ArticlesList() {
  const articlesList = useContext(ArticlesContext);

  return (
    <main>
      <h1>Hello from ArticlesList</h1>
      <Grid container spacing={1}>
        {articlesList.map((article) => (
          <Grid item sm={12} md={3}>
            <ArticlePreview article={article} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default ArticlesList;
