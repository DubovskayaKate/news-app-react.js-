import React from 'react';
import News from './News.js'

class NewsList extends React.Component{    
    render(){        
        const list = this.props.newsList.map(data => <News data = {data}/>)
        return(
            list
        )
    }
}

export default NewsList 