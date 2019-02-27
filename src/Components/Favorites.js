import React, {Component} from 'react';
import CardGroupItem from './CardItem';


export default class Favorites extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{marginTop:"20px"}}>
            <h2><u>Favorites</u></h2>
            <div style={{marginTop:"10px"}}>
            </div>
        </div>
        );
    }
}