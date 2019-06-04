import React from 'react';

class InputBox extends React.Component{
    render(){
        return (            
            <input className={this.props.className} id={this.props.id} placeholder={this.props.placeHolder} type={this.props.type}/>
        )
    }
}

export default InputBox