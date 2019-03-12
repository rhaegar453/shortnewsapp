import React, {Component} from 'react';
import CardGroupItem from './CardItem';
import {connect} from 'react-redux';


class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let pushDown=this.props.pushDown?"100px":"20px";
        return(
            <div style={{marginTop:pushDown}}>
                <h2><u>Todays Top Picks</u></h2>
                <div style={{marginTop:"10px"}}>
                <CardGroupItem/>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        pushDown:state.card.pushDown
    }
}


export default connect(mapStateToProps)(Layout);