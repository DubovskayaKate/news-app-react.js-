import React from 'react';
import InputBox from '/InputBox';
import DefaultButton from '/DefaultButton.js'

class Search extends React.Component{
    render(){
        <div class="main__search">
            <InputBox 
                className = "main__search__input"
                id = "main-search-input"
                type = "search"
                placeHolder = "Search filter"
            />
            <DefaultButton
                className = "main__search__bn"
                id = "main-search-bn"
                name = "Search"                        
            />         
        </div>
    }
}
export default Search