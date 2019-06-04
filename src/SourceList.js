import React from 'react';
import Source from './Source.js';


class SourceList extends React.Component{
    render(){
        const list = this.props.sourceList.map(source => 
            <Source  source = {source}
                     classbutton = "btn_sources"/>
        )
        return(
            list
        )
    }
}
export default SourceList 