//rce
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    //console.log("hello constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    //API
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1701c00196a64365b48217648f01f69f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    //fetch API
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    console.log("pre");
    //API
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=1701c00196a64365b48217648f01f69f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    //fetch API
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    //updating page
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      //API
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=1701c00196a64365b48217648f01f69f&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      //fetch API
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);

      // console.log("next")
      //updating page
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3" style={{ margin: "35px 0px" }}>
          Breaking News - Top Headlines
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
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
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;