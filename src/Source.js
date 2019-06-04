import React from 'react';

class Source extends React.Component{
    render(){
        return (
        <div className="btn_sources">
            <button id={this.props.source.id} key={this.props.source.id}>{this.props.source.name}</button>
        </div>
        )
    }
}

export default Source

    