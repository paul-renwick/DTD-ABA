import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function SecondaryGrid ({ children }) {
  return <Grid
    container
    direction="row"
    justify="space-evenly"
    alignitems="center"
    className="display">
    {children} </Grid>
}
