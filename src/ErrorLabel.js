import React from 'react';
import { NONAME } from 'dns';

class ErrorLabel extends React.Component{
    render(){
        let styleInfoDiv = {
            textAlign :  'center'
        }
        let styleInfoLabel = {
            display : 'none'
        }
        return (
            <div style={styleInfoDiv}>
                <h4 class="main__errorLabel" id="main-errorLabel" style={styleInfoLabel}>No matches :(</h4>
            </div>
        )
    }
}

export default ErrorLabel