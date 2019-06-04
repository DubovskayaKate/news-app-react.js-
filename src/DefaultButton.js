import React from 'react';


class DefaultButton extends React.Component{
    render(){
        return (
            <button id={this.props.id} key={this.props.id}>{this.props.name}</button>
        )
    }
}

export default DefaultButton
