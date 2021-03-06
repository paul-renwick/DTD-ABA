import React from 'react'

import { newTarget } from '../api'

// need to write finish add

export default class AddTarget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      target: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addTarget = this.addTarget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTarget (e) {
    newTarget(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-target'>

        <form>
          <p><input placeholder='target' name='target'
            onChange={this.handleChange}
            value={this.state.target}
          /></p>
          <button type='button' onClick={this.addTarget}>Add Target</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>

      </div>
    )
  }
}
