// rce
// import React, { Component } from "react";
import React from "react"

//converting class base to function base component...................
// export class NewsItem extends Component {
  const NewsItem = (props)=>  {
  // render() {
    // syntx of props - destructuring
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger "
            style={{ left: "87%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://earthsky.org/upl/2023/01/Venus-Saturn-jan21-2023-John-Ashley-Sonoita-AZ-e1674391826539.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text text-danger">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
