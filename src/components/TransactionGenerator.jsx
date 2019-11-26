import React from 'react'
import { Grid, Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'

import { generateTransactions } from '../redux/transactions'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing()
  }
}))

export default function TransactionGenerator() {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Paper className={classes.paper}>
      <Grid container justify='center' spacing={4}>
        <Grid item xs={2}>
          <Button variant='contained' onClick={() => dispatch(generateTransactions(1))}>
            Generate
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' onClick={() => dispatch(generateTransactions(20))}>
            Generate 20
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
