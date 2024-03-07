import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';

export default class News extends Component {


  static defaultProps = {
    category: 'general',
  }
  static propTypes = {
    category: PropTypes.string
  }

    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
        
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=98e9ffce75414c09b3936d2dcb39f79d&page=1&pageSize=8`;
        this.setState({loading:true}) ;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log("ParseData");
        this.setState({articles: parseData.articles, totalResults:parseData.totalResults,loading:false})
        
    }
    handlePre = async ()=>{
      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=98e9ffce75414c09b3936d2dcb39f79d&page=${this.state.page-1}&pageSize=8`;
      this.setState({loading:true}) ;   
      let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          page: this.state.page - 1,
        articles: parseData.articles,
        loading:false
        })
    }
    handleNxt = async ()=>{
      console.log("Next");
      if(!(Math.ceil(this.state.page + 1>this.state.totalResults/9))){
 
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=98e9ffce75414c09b3936d2dcb39f79d&page=${this.state.page+1}&pageSize=8`;
      this.setState({loading:true}) ; 
      let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          page:this.state.page + 1,
          articles: parseData.articles,
          loading:false
        })
      }
    }

  render() {
    return (
        <div className="container my-5">
          {this.state.loading && <Loading/>}
      <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} linkUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className='d-flex justify-content-between my-2'>
  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePre}>&larr; Previous</button>
  <button disabled={this.state.page + 1>this.state.totalResults/9} type="button" className="btn btn-dark" onClick={this.handleNxt}>Next &rarr;</button>
  </div>
        </div>

    )
  }
}
