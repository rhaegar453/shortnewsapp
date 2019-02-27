import React, { Component } from "react";
import { List, Image, Label, Segment, Button, Icon} from "semantic-ui-react";
import {removeBookmark} from '../Store/Actions';
import {connect} from 'react-redux';


class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        id:1,
        title:"2 JeM terrorists killed in J&K\'s Shopian a day after IAF strike",
        author:'Arshiya Chopra',
        article:"Two Jaish-e-Mohammed (JeM) terrorists have been killed in an encounter that broke out early on Wednesday morning in Jammu and Kashmir's Shopian. Reportedly, the forces were carrying out a search operation when the terrorists opened fire on them. The encounter took place a day after Indian Air Force jets struck JeM's biggest training camp in Pakistan's Balakot.",
        likes:390,
        liked:false,
        bookmarked:false,
        tags:['Terrorists','Pakistan','India','IAF'],
        fullUrl:"https://www.timesnownews.com/india/article/pakistan-surgical-strike-ceasefire-violation-rajouri-kashmir-indian-army-shopian-encounter-today-poonch-iaf-air-strikes-balakot-mirage-jets-crpf/373241?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
        imageUrl:"https://assets.inshorts.com/inshorts/images/v1/variants/jpg/m/2019/02_feb/27_wed/img_1551239401334_977.jpg"
    }
  }
  redirectToLink=()=>{
      window.open(this.props.data.fullUrl);
  }
  removeBookmark=()=>{
      console.log('Removing bookmark')
      this.props.removeBookmark(this.props.data.id);
  }
  render() {
    return (
        <List.Item>
          <Image avatar src={this.props.data.imageUrl} />
          <List.Content>
            <List.Header as="a">
                <div style={{display:"flex", alignItems:"row", justifyContent:"space-between"}}>
                <p  onClick={this.redirectToLink}>{this.props.data.title}</p>
                <div style={{marginLeft:"15px"}}>
                <Button color="red" icon basic onClick={this.removeBookmark}><Icon name="remove circle"></Icon></Button>
                </div>
                </div>
            </List.Header>
            <List.Description>
                {this.props.data.tags.map(item=>(
                    <Label size="tiny" style={{borderRadius:"10px"}}>{item}</Label>
                ))}
            </List.Description>
          </List.Content>
        </List.Item>
    );
  }
}

const mapStateToProps=(state)=>{
    return{

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeBookmark:(id)=>dispatch(removeBookmark(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
