import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import data from "./data";
import Navigation from "./Components/Navigation";
import Bookmarks from './Components/Bookmarks';


import Home from "./Components/Home";
import {Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/bookmarks" component={Bookmarks}></Route>
        </Switch>
        </Container>
      </div>
    );
  }
}
