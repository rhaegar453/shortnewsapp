import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';


class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.history.push(name);
    }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary size="massive">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='bookmarks'
            active={activeItem === 'bookmarks'}
            onClick={this.handleItemClick}
          />
          
        </Menu>

      </div>
    )
  }
}

export default withRouter(Navigation);