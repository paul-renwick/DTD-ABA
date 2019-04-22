import React from 'react'
import Button from '@material-ui/core/Button'

export default function PrimaryButton ({ children }) {
  return <Button
    size="large"
    variant="contained"
    color="primary">
    {children} </Button>
}
