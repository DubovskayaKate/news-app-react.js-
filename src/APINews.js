import React from 'react';
import SourceList  from './SourceList.js';
import NewsList from './NewsList.js';
import ReactDOM from 'react-dom';

class APINews {
    constructor(props){
        this.fields = {
            lastUsedUrl : 'p',
            page : 0,
            alreadyNewsDisplayed : 0,
            newsInfo : []
        }
    }


    createNewsBlock( data){
        ReactDOM.render(<NewsList newsList={data}/>,document.getElementById('main-newsContent'));
    }

    loadSources(){
        const url = 'https://newsapi.org/v2/sources?apiKey=f8e8d035014546dd9789f8527d1fe4d3&category=technology&country=us';
        const request = new Request(url);
        fetch(request)
            .then( (response) => response.json())
            .then(
                (data) => {
                    ReactDOM.render(<SourceList sourceList= {data.sources}/>, document.getElementById('main-sources'));
                }            
            );
    }

    loadNewsByUrl(urlPart){
        //view.hideElement(loadButton);
        //view.hideElement(promosionImg);
        // view.hideElement(errorLabel);
        const url = `https://newsapi.org/v2/${urlPart}apiKey=f8e8d035014546dd9789f8527d1fe4d3`;
        const request = new Request(url);
        fetch(request)
            .then( (response) => response.json())
            .then((data) => {  
                let newsCount = data.articles.length;
                if(newsCount === 0){
                    // view.showElement(errorLabel);
                    // view.showElement(promosionImg);
                    // view.hideElement(loadButton);
                    this.fields.newsInfo = [];
                    instance.createNewsBlock(this.fields.newsInfo);
                    return;
                }      
                this.fields.newsInfo = data.articles;
                instance.createNewsBlock(data.articles);
                // if (newsCount < 5)
                    // view.hideElement(loadButton);
                // else
                    // view.showElement(loadButton);

                this.fields.lastUsedUrl = url;
                this.fields.page = 2;
                this.fields.alreadyNewsDisplayed = newsCount;
            });
    }

    appendNews(){
        this.field.lastUsedUrl = this.fields.lastUsedUrl.replace(new RegExp('page=.*&'), `page=${this.fields.page}&`);
        const request = new Request(this.fields.lastUsedUrl);

        fetch(request)
            .then( (response) => response.json() )
            .then(
                (data) => {
                    let newsCount = data.articles.length;
                    if(newsCount === 0) {
                        // view.hideElement(loadButton);
                        return;
                    }     
                    this.fields.newsInfo = this.fields.newsInfo.concat(data.articles);
                    APINews.createNewsBlock(this.fields.newsInfo);                

                    this.fields.alreadyNewsDisplayed += newsCount;
                    this.fields.page++;

                    if(newsCount < 5 || this.fields.alreadyNewsDisplayed === 40){
                        // view.hideElement(loadButton);
                    }
            });
    } 


}

const instance = new APINews();

export default instance;