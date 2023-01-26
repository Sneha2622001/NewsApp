// rce
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    // syntx of props - destructuring
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://earthsky.org/upl/2023/01/Venus-Saturn-jan21-2023-John-Ashley-Sonoita-AZ-e1674391826539.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
           </div>
      </div>
    )
  }
}

export default NewsItem
