import React from 'react';

class Main extends React.Component{
    render(){
        return(
            <main>
                <div class="main__sources" id="main-sources" >
                </div>

                <div class="main__search">
                    <input class="main__search__input" id="main-search-input" placeholder="Search filter" type="search"/>
                    <button class="main__search__bn" id="main-search-bn">Search</button>          
                </div>

                <div class="main__newsContent" id ="main-newsContent">   
                </div>

                <img id="main-img" src="images/banner.png"/>
                    
                <div style="text-align: center;">
                    <h4 class="main__errorLabel" id="main-errorLabel" style="display: none">No matches :(</h4>
                </div>
                <button class="main__load-bn" id="main-load-bn" style="display: none">Load more</button> 
            
            </main>
        )
    }
}
export default Main