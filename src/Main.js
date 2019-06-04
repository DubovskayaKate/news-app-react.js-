import React from 'react';
import Search from './Search';
import ErrorLabel from './ErrorLabel';
import DefaultButton from './DefaultButton';
import APINews from './APINews';
import instance from './APINews';

class Main extends React.Component{
    render() { 
        const fun = () => {
            instance.appendNews();
        }

        return(
            <main>
                <div className="main__sources" id="main-sources">
                </div>
                <Search/>
                <div className="main__newsContent" id ="main-newsContent">   
                </div>
                <img id="main-img" src="images/banner.png"/>                    
                <ErrorLabel/>
                <DefaultButton
                    className = "main__load-bn"
                    id = "main-load-bn"
                    name = "Load more"    
                    style = "display: none"
                    func = {fun}
                />
            
            </main>
        )
    }
}
export default Main