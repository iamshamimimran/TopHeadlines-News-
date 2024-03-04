import React, { Component } from 'react'
import NewsItem from './NewsItem';
export default class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=98e9ffce75414c09b3936d2dcb39f79d";
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles: parseData.articles})
        
    }

  render() {
    return (
        <div className="container my-5">
      <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} linkUrl={element.url}/>
          </div>
        })}
      </div>
      <div className='d-flex justify-content-between'>
  <button type="button" className="btn btn-dark">&larr; Previous</button>
  <button type="button" className="btn btn-dark">Next &rarr;</button>
  </div>
        </div>

    )
  }
}
