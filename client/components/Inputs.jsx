import React from 'react'
//Material UI Imports
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { PrimaryGrid, SecondaryGrid } from './CustomMaterialUI'

let session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue
export let sessionData = []

class Inputs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display: 0,
      target: 'Choose a target'
    }
  }

  updateDisplay = (num) => {
    this.setState({
      display: num,
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
      [e.target.name]: e.target.value,
    })
  }


  render () {
    return (
    <React.Fragment>

      <PrimaryGrid >
      <Typography variant="headline">
        Target: {this.state.target}</Typography>
      </PrimaryGrid>

      <PrimaryGrid>
      <Typography variant="headline">
        {`${this.state.display}%`} Correct </Typography>
      </PrimaryGrid>

      <PrimaryGrid >
        <TextField 
        id="outlined-target"
        label="target"
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
      <Button 
        fullWidth={true}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => session.push(0)}
        className='button'>Prompt
        </Button>
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
          onClick={() => {this.updateDisplay(0); session = []}}
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
