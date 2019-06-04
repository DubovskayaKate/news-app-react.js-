import React from 'react';

class DefaultButton extends React.Component{

    state = {
        isVisiable: true
    }
    render(){
        let styleVis ={
            display : this.props.style
        }
        console.log(this.props);
        return (
            <button className={this.props.className} 
                    id={this.props.id} 
                    onClick = {this.props.func}
                    key={this.props.id} 
                    style = {styleVis}
                    >{this.props.name}
                    </button>    
        )
    }
}

export default DefaultButton

//style={this.props.style  ? this.props.style : "display: none"}