import "./Article.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/userProvider/UserProvider";
import { useContext, useState } from "react";

export default function Article() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [article, setArticle] = useState("");

  const close = () => {
    navigate(`/user/${user.id}`);
  };

  const handleSave = () => {
    const storedArticles = localStorage.getItem("articles");
    const articles = storedArticles ? JSON.parse(storedArticles) : [];
    if (article !== "") articles.push(article);
    localStorage.setItem("articles", JSON.stringify(articles));
    setArticle("");
  };

  return (
    <>
      <div className="article">
        <label htmlFor="article" className="article-header">
          Article
          <button className="btn close" onClick={close}>
            X
          </button>
        </label>
        <textarea
          id="article"
          name="article"
          className="article-text"
          rows="15"
          placeholder="Write your article here."
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
        <button className="btn save" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
}