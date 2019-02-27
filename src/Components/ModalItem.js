import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Grid, Button, Icon } from "semantic-ui-react";
import { modalToggle, bookMarkArticle, likeArticle, dislikeArticile} from "../Store/Actions";



class ModalGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  onCloseClick = () => {
    console.log("Close button clicked");
    this.props.modalToggle();
  };
  visitSource=()=>{
      window.open(this.props.modalData.fullUrl);
  }
  likeArticle=()=>{
        this.props.likeArticle(this.props.modalData.id);
  }
  unlikeArticle=()=>{
      this.props.dislikeArticile(this.props.modalData.id);
  }

  makeBookmark=()=>{
    this.props.bookMarkArticle(this.props.modalData.id);
  }
  render() {
    let bookmarked=this.props.modalData.bookmarked?'disabled':null;
    return (
      <div>
        <Modal
        basic
          open={this.props.modalState}
          centered={false}
          onClose={this.onCloseClick}
        >
          <Modal.Header>
              <div style={{display:"flex", alignItems:"row", justifyContent:"space-between"}}>
                {this.props.modalData.title}
                    <p style={{fontSize:"11px", opacity:"0.7"}}>Author: {this.props.modalData.author}</p>
              </div>
              <div style={{marginTop:"5px"}}>
              <Button color="green" onClick={this.visitSource}><Icon name="linkify"></Icon>Visit Source</Button>
              </div>
          </Modal.Header>
          <Modal.Content>
            <Grid stackable>
              <Grid.Column>
                <div
                  style={{
                    display: "flex",
                    alignItems: "row",
                    justifyContent: "row"
                  }}
                >
                  <img
                    style={{
                      boxShadow: "0 0 8px 8px inset white",
                      borderRadius: "10px"
                    }}
                    width={500}
                    src={this.props.modalData.imageUrl}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p style={{ fontSize: "18px" }}>
                      {this.props.modalData.article}
                    </p>
                    <div style={{ marginTop: "30px" }} />
                    <div style={{ marginTop: "40px" }}>
                      <Grid>
                        <Button.Group size="tiny">
                          { 
                            this.props.modalData.liked?<Button color="red" onClick={this.unlikeArticle}>
                            <Icon name="dont" />
                            Unlike
                          </Button>:<Button color="twitter" onClick={this.likeArticle}>
                            <Icon name="heart outline" />
                            Like{console.log(this.props.modalData.liked)}
                          </Button>}
                          {this.props.modalData.bookmarked?<Button color="brown" disabled>
                            <Icon name="bookmark" />
                            Bookmarked
                          </Button>:<Button color="brown" onClick={this.makeBookmark}>
                            <Icon name="bookmark" />
                            Bookmark
                          </Button>}
                        </Button.Group>
                      </Grid>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.card.modalState,
    modalData: state.card.modalData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalToggle: () => dispatch(modalToggle()),
    bookMarkArticle:(id)=>dispatch(bookMarkArticle(id)),
    likeArticle:(id)=>dispatch(likeArticle(id)),
    dislikeArticile:(id)=>dispatch(dislikeArticile(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalGrid);
