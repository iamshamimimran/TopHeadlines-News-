import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {title, description, imgUrl, linkUrl, author, date, source} = this.props;
    return (
       <div className="card my-2" style={{width: "18rem"}}>
<span class="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{zIndex:"1", left:"90%"}}>
    {source}
  </span>

  <img src={!imgUrl?"https://www.livemint.com/lm-img/img/2024/03/06/1600x900/APPLE_1680694580101_1709698342336.JPG":imgUrl} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
    <a href={linkUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    )
  }
}
    