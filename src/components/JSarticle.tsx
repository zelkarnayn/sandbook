import React, {useEffect} from "react";
import { useArticles } from "../state/JSarticle.store";


function JSarticle() {
  const articles = useArticles((state) => state.articles);
  console.log(articles, "IN ART");
  const { loading, error, fetchArticles } = useArticles((state) => ({
    loading: state.loading,
    error: state.error,
    fetchArticles: state.fetchArticles,
  }));
  
  useEffect(()=>{
    fetchArticles()
  }, [])

  return (
    <div>
     
      <div>
        {Array.isArray(articles) ? (
          articles.map((item) => (
            <div key={item.id}>
              {item.title}
              {/* {item.text}
              {item.author}
              <img src={item.url} alt="alt" /> */}
            </div>
            
          ))
        ) : (
          <p>Статьи пока не загужены</p>
        )}
      
      </div>
      
    </div>
  );
}

export default JSarticle;
