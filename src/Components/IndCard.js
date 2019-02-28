import React, { Component } from "react";
import {
  Card,
  Modal,
  Label,
  Reveal,
  Grid,
  Icon,
  Button,
  ButtonGroup
} from "semantic-ui-react";
import {
  modalToggle,
  bookMarkArticle,
  likeArticle,
  dislikeArticile
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
      <div style={{ padding: "10px" }}>
        <Reveal animated="move down">
          <Reveal.Content visible>
            <Card>
              <img src={this.props.data.imageUrl} height={270} width={300} />
            </Card>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Grid centered stackable>
              <Grid.Row centered>
                <h3>{this.props.data.title}</h3>
                <Grid.Column />
                <Button.Group style={{ borderRadius: "10px" }} inverted>
                  <Button onClick={this.openModal} color="purple">
                    Details
                  </Button>
                  {this.props.data.liked ? (
                    <Button onClick={this.dislikeArticile} color="red">
                      <Icon name="dont" />
                      {console.log(this.props.data.liked)}
                      Dislike
                    </Button>
                  ) : (
                    <Button onClick={this.likeArticle} color="twitter">
                      <Icon name="heart" />
                      Like
                    </Button>
                  )}
                  {this.props.data.bookmarked ? (
                    <Button disabled color="brown">
                      <Icon name="bookmark" />
                      Bookmarked
                    </Button>
                  ) : (
                    <Button onClick={this.bookmarkArticle} color="brown">
                      <Icon name="bookmark" />
                      Bookmark
                    </Button>
                  )}
                </Button.Group>
              </Grid.Row>
            </Grid>

            <Grid centered stackable>
              <h3 style={{ opacity: "0.6" }}>
                <u>Tags</u>
              </h3>
              <Grid.Row centered>
                {this.props.data.tags.map(data => (
                  <Label style={{ borderRadius: "15px", padding: "3px" }}>
                    {data}
                  </Label>
                ))}
                <Grid.Column />
              </Grid.Row>
            </Grid>
            <Grid centered>
              <Grid.Row centered>
                <Button as="div" labelPosition="right">
                  <Button color="red">
                    <Icon name="heart" />
                    Likes
                  </Button>
                  <Label as="a" basic color="red" pointing="left">
                    {this.props.data.likes}
                  </Label>
                </Button>
              </Grid.Row>
            </Grid>
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(modalToggle(id)),
    bookmark: id => dispatch(bookMarkArticle(id)),
    likeArticle: id => dispatch(likeArticle(id)),
    dislikeArticile: id => dispatch(dislikeArticile(id))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndCard);
