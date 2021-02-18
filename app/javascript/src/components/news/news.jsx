import React,{Component} from 'react';

import Loader from '../loader/loader';

import {sample} from 'underscore';

import {handleErrors} from '../../../utils/fetchHelper';

const Article = ({source,author, title, urlToImage,url}) => (
    <a href={url} target="_blank" className="card article-card shadow px-4 py-2 mb-3">
        <p className="card-title mb-2 font-weight-bold text-bold">{title}</p>
        <img className="img-fluid mb-2" src={urlToImage} />
        <div className="author mb-2 font-weight-light">
            Author: {author || "unkown"}
        </div>
    </a>
)


class News extends Component {
    constructor(props) {
        super();

        this.state = {
            loaded: false,
            articles: [],
            error: null
        }
    }


    getNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=95d80332b662412b823e8f83a411537d`)
        .then(handleErrors)
        .then(res => {
          
            let articles = sample(res.articles,10);
          

            this.setState({
                articles,
                loaded: true
            });
            
        })
        .catch(error => {
            this.setState({error: error.message,loaded: true});
        })
        
       
    }

    componentDidMount() {
     
      this.getNews();
    }

    render() {

        return (
        <div className="news">
            {this.state.loaded? 
                this.state.error? 
                <div className="placeholder shadow">
                    Ran Out of News Requests :(
                </div>
                :
                this.state.articles.map((article,index)=> (
                    <Article key={index} {...article}/>
               
                )
                )
                    :
                <Loader />
            
            }
        
        </div>);
    }



}


export default News;