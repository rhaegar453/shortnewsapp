import React, { Component } from "react";
import CardGroupItem from "./CardItem";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import BookItem from "./BookItem";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      let pushDown=this.props.pushDown?"100px":"20px";
    return (
      <div style={{ marginTop: pushDown }}>
        <h2>
          <u>Bookmarks</u>
        </h2>
        {this.props.bookmarks.length == 0 ? (
          <p>No bookmarks found</p>
        ) : (
          <div className="col-md-8 col-sm-12" style={{ marginTop: "10px" }}>
            <div className="list-group">
              {this.props.bookmarks.map(data => (
                <BookItem style={{marginTop:"5px"}} key={data.id} data={data} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bookmarks: state.card.bookmarks,
    pushDown:state.card.pushDown
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmarks);
