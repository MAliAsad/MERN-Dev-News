import ArticleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((item, index) => (
        <ArticleItem article={item} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
