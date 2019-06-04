import React from 'react';

class DefaultButton extends React.Component{
    render(){
        return (
            <button class={this.props.className} id={this.props.id} key={this.props.id} style={this.props.style ? this.props.style : "display: unset"}>{this.props.name}</button>    
        )
    }
}

export default DefaultButton
