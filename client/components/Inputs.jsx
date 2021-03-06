import React from 'react'

// Other components
import TargetMenu from './TargetMenu'

//API
import { newTarget } from '../api'

// Material UI Imports
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { PrimaryGrid, SecondaryGrid } from './CustomMaterialUI'


let session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue
export let sessionData = []
export let target = ''

class Inputs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 0,
      target: 'Choose a target'
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.addTarget = this.addTarget.bind(this)
  }

  updateDisplay = (num, str) => {
    this.setState({
      display: num,
      target: str
    })
  }

  updateSession = () => {
    this.setState({
      display: 0,
      session: []
    })
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTarget (e) {
    newTarget(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <React.Fragment>

        <PrimaryGrid >
          <Typography variant="h5">
        Target: {this.state.target}</Typography>
        </PrimaryGrid>

        <PrimaryGrid>
          <Typography variant="h5">
            {`${this.state.display}%`} Correct </Typography>
        </PrimaryGrid>

        <PrimaryGrid >
          <TargetMenu />
          <TextField
            id="outlined-target"
            label="New target"
            variant="outlined"
            name="target"
            onChange={this.changeHandler} />
        </PrimaryGrid>
        <br />

        <SecondaryGrid >
          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => session.push(1)}
            className='button'>Correct</Button>
          {/* <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => session.push(0)}
            className='button'>Prompt
          </Button> */}
          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => session.push(0)}
            className='button'>Incorrect
          </Button>
        </SecondaryGrid>

        <SecondaryGrid>
          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => this.updateDisplay
            (Math.round((session.reduce(reducer) / session.length) * 100))}
            className='button'>Done
          </Button>

          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="secondary"
            onClick={() =>
              sessionData.push(this.state.display) & console.log(sessionData)}
            className='button'>Plot Data
          </Button>

          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="secondary"
            onClick={this.addTarget(this.state.target, this.state.display)}
            className='button'>Save Data 
          </Button>

          <Button
            fullWidth={true}
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => { this.updateDisplay(0); session = [] }}
            className='button'>Clear Data
          </Button>
        </SecondaryGrid>

      </React.Fragment>
    )
  }
}

export default Inputs

/* <button onClick={() => session.push('Incorrect')}
className='button'>Incorrect</button>
<button onClick={() => session.push('Prompt')}
className='button'>Prompt</button>
<button onClick={() => session.push('Correct')}
className='button'>Correct</button> */
