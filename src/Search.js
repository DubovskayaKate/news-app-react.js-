import React from 'react';
import InputBox from './InputBox';
import DefaultButton from './DefaultButton.js'
import APINews from './APINews';
import instance from './APINews';

export default class Search extends React.Component{
    render(){
        const enterKeys = () => {
                if(document.querySelector('#main-search-input').value.length > 0){
                    instance.loadNewsByUrl(`everything?q=${document.querySelector('#main-search-input').value}&pageSize=5&page=1&`);
            }
        }

        const funcKey =  (event) => { 
                event.preventDefault();
                if (event.keyCode === 13) {
                    document.querySelector('#main-search-bn').click();
            }
        }
        return (
            <div className="main__search">
                <InputBox 
                    className = "main__search__input"
                    id = "main-search-input"
                    type = "search"
                    placeHolder = "Search filter"
                    func = {funcKey.bind(this)}
                />
                <DefaultButton
                    className = "main__search__bn"
                    id = "main-search-bn"
                    name = "Search"    
                    func =  {enterKeys}
                    
                />         
            </div>
        )
    }
    
}