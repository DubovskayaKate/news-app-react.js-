import React from 'react';
import News from './News.js'

class NewsList extends React.Component{    
    render(){ 
        const classList = {
            content : "news-item__content",
            title : "news-item__content__title",
            img : "news-item__content__img",
            source :"news-item__content__source",
            text : "news-item__content__text",
            link : "news-item__content__link"
        }   

        const list = this.props.newsList.map(data => 
                <News   data = {data} 
                        className__news = "news-item"
                        className__content = {classList}
                        />
                )
        return(
            list
        )
    }
}

export default NewsList 

/**
                        className__news = "news-item"
                        className__content = {classList} */