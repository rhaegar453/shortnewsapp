import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  modalToggle,
  bookMarkArticle,
  likeArticle,
  dislikeArticile,
  removeBookmark
} from "../Store/Actions";

class ModalItem extends React.Component {
  constructor(props) {
    super(props);
  }

  visitSite = () => {
    window.open(this.props.modalData.fullUrl);
  };

  render() {
    return (
      <Modal
        show={this.props.modalState}
        onHide={this.props.modalToggle}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modalData.title}</Modal.Title>
          <p className="text-left" style={{ margin: "5px", opacity: "0.4" }}>
            - {this.props.modalData.author}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div>
            <button className="btn btn-primary" style={{position:"absolute", right:"3px", top:"5px"}}><i class="far fa-thumbs-up"></i>  {this.props.modalData.likes}</button>
            <img
              style={{
                borderRadius: "10px",
                margin: "6px",
                overflowWrap: "break-word"
              }}
              width={500}
              src={this.props.modalData.imageUrl}
            />
            </div>
          </div>
          <p>{this.props.modalData.article}</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {this.props.modalData.bookmarked ? (
            <button
              className="btn btn-danger"
              onClick={() => this.props.removeBookmark(this.props.modalData.id)}
            >
              Remove Bookmark
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => this.props.bookmark(this.props.modalData.id)}
            >
              Bookmark
            </button>
          )}

          {this.props.modalData.liked ? (
            <button
              className="btn btn-info"
              onClick={() =>
                this.props.dislikeArticile(this.props.modalData.id)
              }
            >
              Dislike
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => this.props.likeArticle(this.props.modalData.id)}
            >
              Like
            </button>
          )}
          <button className="btn btn-warning" onClick={this.visitSite}>
            Visit Story
          </button>
        </Modal.Footer>
      </Modal>
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
    bookmark: id => dispatch(bookMarkArticle(id)),
    likeArticle: id => dispatch(likeArticle(id)),
    dislikeArticile: id => dispatch(dislikeArticile(id)),
    removeBookmark: id => dispatch(removeBookmark(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalItem);
