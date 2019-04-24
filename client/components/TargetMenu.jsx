// For menu
import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
          color="primary"
        >
        
          <MenuItem onClick={this.handleClose}>Brush</MenuItem>
          <MenuItem onClick={this.handleClose}>Ball</MenuItem>
          <MenuItem onClick={this.handleClose}>Balloon</MenuItem>
        </Menu>
      </div>
    )
  }
}
