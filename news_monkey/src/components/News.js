import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  const [articlesData, setArticlesData] = useState();

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7a4ee451400e4bf88c7f356f3fbeb07c";

      const responseData = await fetch(url);
      const parsedData = await responseData.json();

      setArticlesData(parsedData.articles);
    }

    fetchData(); // Call the async function within useEffect
    // Return a cleanup function if needed
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="container my-3 ">
      <h1>News Monkey - latest news</h1>
      <div className="row">
        {articlesData?.map((element) => {
          return (
            <div className="col-md-4  mt-5" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
