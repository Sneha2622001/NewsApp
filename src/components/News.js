//rce
import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
//export class News extends Component {
  const News = (props)=>{
    const [articles , setArticles]=useState([])
    const [loading , setLoading]=useState(true)
    const [page , setPage]=useState(1)
    const [totalResults , setTotalResults]=useState(0)
    // document.title = `${this.captalizeFirstLetter(
    //   props.category
    // )} - News `;

  // static defaultProps = {           ////go to last line no. 116 changed to class base component
  //   country: "in",
  //   pageSize: 9,
  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  //it will capitalize first word of title
  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {            ////go to line no. 9 changed to function component
  //   super(props);
  //   //console.log("hello constructor from news component");
  //   this.state = {
  //     articles: [],
  //     // loading: true,
  //     page: 1,
  //     totalResults: 0
  //   };
  //   //changing title dynamically
  //   document.title = `${this.captalizeFirstLetter(
  //     props.category
  //   )} - News `;
  // }

  // async updateNews() {
    const  updateNews = async()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e217f71fcd564f988daf2e11799c2031&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading: true})
    setLoading(true)
    //fetch API...........
    let data = await fetch(url);
    console.log(data);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(65);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    //console.log(parseData);
    // this.setState({           //// line no. 58 changed to function based
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false
    // });
    props.setProgress(100);
  }

  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  }, [])
  // async componentDidMount() {    ////line no. 70
  //   this.updateNews();
  // }

  const handlePrevClick = async () => {
    // //updating page
    // this.setState({
    //   page: this.state.page - 1,
    // })
    setPage(page-1)
    updateNews();
  };

  const handleNextClick = async () => {
      // this.setState({
      //   page: this.state.page + 1,
      // });
      setPage(page+1)
      updateNews();
  };

  const fetchMoreData = async() => {
    // this.setState({page: this.state.page + 1 })
    // setPage(page+1)
    //update news copied
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e217f71fcd564f988daf2e11799c2031&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
     // this.setState({ loading: true });
     //fetch API
     let data = await fetch(url);
     let parseData = await data.json();
    //  console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    //  this.setState({
    //    articles:articles.concat(parseData.articles),
    //    totalResults: parseData.totalResults,
    //    // loading: false,
      
    //  });
   };

  //  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px " , marginTop: '90px'}}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}

        {/*------------ react infinite scroll searched in google --------- */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
          
          
          <div className="row">
            {/* {!this.state.loading && this.state.articles.map((element) => { */}

            {/* -----------infinite scroll  ------------*/}

            {articles.map((element ,index) => {
              return  <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              
            })}
          </div>   
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  // }
}


News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
