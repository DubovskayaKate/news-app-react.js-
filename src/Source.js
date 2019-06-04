import React from 'react';


class Source extends React.Component{
    render(){
        return (
            <div className = {this.props.classbutton}>
                <button id={this.props.source.id} 
                        key={this.props.source.id}
                        onClick= {this.props.func}>
                        {this.props.source.name}
                </button> 
            </div>
        )
    }
}

export default Source
