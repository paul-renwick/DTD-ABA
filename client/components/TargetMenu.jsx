// For menu
import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

//API imports

import { getTargets } from '../api'

export default class TargetMenu extends React.Component {

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleClose = () => {
    this.setState({ anchorEl: null })
  };

  renderTargets (err, targets) {
    this.setState({
      error: err,
      targets: targets || []
    })
  }

  render () {
    const { anchorEl } = this.state

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Select Target
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
    
        >
          <MenuItem onClick={this.handleClose}>Bag</MenuItem>
          <MenuItem onClick={this.handleClose}>Ball</MenuItem>
          <MenuItem onClick={this.handleClose}>Balloon</MenuItem>
        </Menu>
      </div>
    )
  }
}
