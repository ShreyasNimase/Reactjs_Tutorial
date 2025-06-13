import React from "react";

export default function NewsItem(props) {
  const { title, description, imageUrl, newsUrl } = props;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          width={"100px"}
          height={"150px"}
        />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description} ...</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary ">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
