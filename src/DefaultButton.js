import React from 'react';

class DefaultButton extends React.Component{

    state = {
        isVisiable: true
    }
    render(){
        var styleVis ={
            display : this.props.style
        }
        return (
            <button class={this.props.className} 
                    id={this.props.id} 
                    onclick = {this.props.func}
                    key={this.props.id} 
                    style = {styleVis}
                    >{this.props.name}
                    </button>    
        )
    }
}

export default DefaultButton

//style={this.props.style  ? this.props.style : "display: none"}