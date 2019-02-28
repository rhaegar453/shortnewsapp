import React, {Component} from 'react';
import CardGroupItem from './CardItem';
import {connect} from 'react-redux';
import {List} from 'semantic-ui-react';
import BookItem from './BookItem';


class Bookmarks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{marginTop:"20px"}}>
            <h2><u>Bookmarks</u></h2>
            {this.props.bookmarks.length==0?<p>No bookmarks found</p>:
            <div style={{marginTop:"10px"}}>
                <List relaxed="very">
                {this.props.bookmarks.map(data=>(
                <BookItem key={data.id} data={data}></BookItem>
                ))}
                    
                </List>
            </div>
        }
        </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        bookmarks:state.card.bookmarks
    }
}
const mapDispatchToProps=dispatch=>{
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);