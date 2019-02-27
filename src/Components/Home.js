import React, {Component} from 'react';
import CardGroupItem from './CardItem';
import {connect} from 'react-redux';


class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{marginTop:"20px"}}>
                <h2><u>Todays Top Picks</u></h2>
                <div style={{marginTop:"10px"}}>
                <CardGroupItem/>
                </div>
            </div>
        );
    }
}


export default Layout;