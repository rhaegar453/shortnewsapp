import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {pushDown} from '../Store/Actions';



class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (name) => {
    this.setState({ activeItem: name });
    this.props.history.push(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <nav className=" navbar navbar-expand-lg fixed-top navbar-light bg-primary">
        <Link className="navbar-brand font-weight-bold" to="home">NewsShorts</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.props.pushDown}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    pushDown:()=>dispatch(pushDown())
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Navigation));
