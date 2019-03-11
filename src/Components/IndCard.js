import React, { Component } from "react";

import {
  modalToggle,
  bookMarkArticle,
  likeArticle,
  dislikeArticile,
  removeBookmark
} from "../Store/Actions";
import { connect } from "react-redux";




class IndCard extends React.Component {
  constructor(props) {
    super(props);
  }
  openModal = () => {
    this.props.openModal(this.props.data.id);
  };

  bookmarkArticle = () => {
    this.props.bookmark(this.props.data.id);
  };

  likeArticle = () => {
    this.props.likeArticle(this.props.data.id);
  };
  dislikeArticile = () => {
    this.props.dislikeArticile(this.props.data.id);
  };

  render() {
    return (
      <div className="col-sm-6 col-lg-3" style={{ marginTop: "30px" }}>
        <div className="card" style={{ borderRadius: "15px", borderWidth:"2px"}}>
          <img
            className="card-img-top"
            style={{ borderRadius: "15px 15px 0 0" }}
            src={this.props.data.imageUrl}
            width={350}
            height={250}
          />
          
          {this.props.data.bookmarked?<button className="btn btn-danger" onClick={()=>this.props.removeBookmark(this.props.data.id)} style={{margin:"4px",borderRadius:"10px",position:"absolute", left:"0px"}}><i class="fas fa-bookmark"></i></button>:<button className="btn btn-danger" onClick={()=>this.props.bookmark(this.props.data.id)} style={{margin:"4px",borderRadius:"10px",position:"absolute", left:"0px"}}><i class="far fa-bookmark"></i></button>}

          <button className="btn btn-danger" onClick={this.openModal} style={{margin:"4px",borderRadius:"10px",position:"absolute", right:"0px"}}>View Story</button>
          <div
            className="card-title text-center font-weight-bold p-2"
            style={{ fontSize: "14px"}}

          >
            {this.props.data.title}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(modalToggle(id)),
    bookmark: id => dispatch(bookMarkArticle(id)),
    likeArticle: id => dispatch(likeArticle(id)),
    dislikeArticile: id => dispatch(dislikeArticile(id)),
    removeBookmark:id=>dispatch(removeBookmark(id))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndCard);
