import React from 'react';
import './images/img1.jpg' 

class News extends React.Component{
    render(){
        const img = this.props.data.urlToImage ? this.props.data.urlToImage : './images/img1.jpg';
        const imgStyle = {
            backgroundImage: `url(${img})`
        };
        const classesContent = this.props.className__content;
        return (
            <div className={this.props.className__news}>
                <div className={classesContent.img} style={imgStyle}>
                            
                </div>    
                <div className={classesContent.content}>
                    <h3 className={classesContent.title}>{this.props.data.title}</h3>
                    <h4 className={classesContent.source}>{this.props.data.source.name}</h4>
                    <p className={classesContent.text}>{this.props.data.description}</p>
                    <a className={classesContent.link} href={this.props.data.url}>Read more</a>
                </div>
            </div>
        )
    }
}


export default News
