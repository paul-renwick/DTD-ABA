import React from 'react'
import Button from '@material-ui/core/Button'

export default function SecondaryButton ({ children }) {
  return <Button
    size="large"
    variant="contained"
    color="secondary">
    {children} </Button>
}
