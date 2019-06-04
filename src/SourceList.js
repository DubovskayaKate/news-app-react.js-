import React from 'react';
import Source from './Source.js';
import APINews from './APINews';
import instance from './APINews';


class SourceList extends React.Component{

    render(){
        const funcLoad = (source) => {
            instance.loadNewsByUrl(`everything?sources=${source.id}&pageSize=5&page=1&`);
        }
        const list = this.props.sourceList.map(source => 
            <Source  source = {source}
                     classbutton = "btn_sources"
                     func = {funcLoad.bind(this, source) }/>
        )
        return(
            list
        )
    }



}
export default SourceList 