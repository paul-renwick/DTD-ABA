import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function PrimaryGrid ({ children }) {
  return <Grid
    container
    direction="row"
    justify="center"
    alignitems="center"
    className="display">
    {children} </Grid>
}
