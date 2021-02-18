import React,{Component} from 'react';
import {articles} from './articles';

const Article = ({source,author, title, urlToImage,url}) => (
    <a href={url} target="_blank" className="card article-card shadow px-4 py-2 mb-3">
        <p className="card-title mb-2 font-weight-bold text-bold">{title}</p>
        <img className="img-fluid mb-2" src={urlToImage} />
        <div className="author mb-2 font-weight-light">
            Author: {author || "unkown"}
        </div>
    </a>
)


const News = props => {
        return (
        <div className="news">
               {articles.map((article,index)=> (
                    <Article key={index} {...article}/> ))
                }
        </div>);
}


export default News;