import React from 'react';
import Search from 'Search';
import ErrorLabel from '/ErrorLabel';
import DefaultButton from '/DefaultButton';

class Main extends React.Component{
    render(){
        return(
            <main>
                <div class="main__sources" id="main-sources" >

                </div>
                <Search/>
                <div class="main__newsContent" id ="main-newsContent">   

                </div>
                <img id="main-img" src="images/banner.png"/>                    
                <ErrorLabel/>
                <DefaultButton
                    className = "main__load-bn"
                    id = "main-load-bn"
                    name = "Load more"    
                    style = "display: none"
                />
            
            </main>
        )
    }
}
export default Main