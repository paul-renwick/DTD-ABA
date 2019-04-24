import React from 'react'
import Inputs from './Inputs'
import LineChart from './LineChart'
// import TargetMenu from './TargetMenu'

//MATERIAL UI COMPONENTS
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import Typography from '@material-ui/core/Typography'
import { PrimaryGrid } from './CustomMaterialUI'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  },
  status: {
    danger: 'orange'
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: 30
  }
})

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <PrimaryGrid>
          <Typography variant="h4" gutterBottom>
           DISCRETE TRIAL DATA
          </Typography>
        </PrimaryGrid>
        <div className="content">
          <LineChart />
          <Inputs />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
