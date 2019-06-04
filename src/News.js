import React from 'react';
import './images/img1.jpg' 

class News extends React.Component{
    render(){
        const img = this.props.data.urlToImage ? this.props.data.urlToImage : './images/img1.jpg';
        const imgStyle = {
            backgroundImage: `url(${img})`
        };
        return (
            <div className="news-item">
                <div className="news-item__content__img" style={imgStyle}>
                            
                </div>    
                <div className="news-item__content">
                    <h3 className="news-item__content__title">{this.props.data.title}</h3>
                    <h4 className="news-item__content__source">{this.props.data.source.name}</h4>
                    <p className="news-item__content__text">{this.props.data.description}</p>
                    <a className="news-item__content__link" href={this.props.data.url}>Read more</a>
                </div>
            </div>
        )
    }
}


export default News
