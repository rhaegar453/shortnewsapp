import React, { Component } from "react";
import { connect } from "react-redux";
import IndCard from "./IndCard";
import { modalToggle } from "../Store/Actions";
import ModalComponent from "./ModalItem";
import { Grid, Button } from "semantic-ui-react";
import ModalGrid from './ModalItem';


class CardGroupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <ModalGrid></ModalGrid>
          {this.props.articles.map((data, index) => (
            <IndCard key={index} data={data} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.card.articles,
    modalState: state.card.modalState,
    modalData: state.card.modalData
  };
};


export default connect(
  mapStateToProps
)(CardGroupItem);
