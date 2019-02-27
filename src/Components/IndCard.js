import React, {Component} from 'react';
import {Card, Modal} from 'semantic-ui-react';
import {modalToggle} from '../Store/Actions';
import {connect} from 'react-redux';

class IndCard extends React.Component{
    constructor(props){
        super(props);
    }
    openModal=()=>{
        this.props.openModal(this.props.data.id);
    }
    render(){
        return(
            <div style={{padding:"10px"}} onClick={this.openModal}>
                <Card><img src={this.props.data.imageUrl} height={270} width={300}></img></Card>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openModal:(id)=>dispatch(modalToggle(id))
    }
}

const mapStateToProps=(state)=>{
    return{
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndCard);