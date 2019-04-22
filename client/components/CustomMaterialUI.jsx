import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export function SecondaryButton ({ children }) {
  return <Button
    size="large"
    variant="contained"
    color="secondary">
    {children} </Button>
}

export function PrimaryButton ({ children }) {
  return <Button
    size="large"
    variant="contained"
    color="primary">
    {children} </Button>
}

export function PrimaryGrid ({ children }) {
  return <Grid
    container
    direction="row"
    justify="center"
    alignitems="center"
    className="display">
    {children} </Grid>
}

export function SecondaryGrid ({ children }) {
  return <Grid
    container
    direction="row"
    justify="space-evenly"
    alignitems="center"
    className="display">
    {children} </Grid>
}
