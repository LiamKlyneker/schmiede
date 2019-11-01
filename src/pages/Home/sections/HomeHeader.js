import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
} from '@material-ui/core';

import useActions from '#hooks/useActions';
import { setFilterInput } from '#modules/Items/actions';
import { selectItems } from '#modules/Items/selectors';

const HomeHeader = ({ openModal }) => {
  /* Selectors */
  const { filterInput } = useSelector(selectItems());

  /* Actions */
  const actions = useActions({
    setFilterInput
  });

  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={10}>
          <Typography variant="h5" gutterBottom>CD's/DVD's</Typography>
        </Grid>
        <Grid item xs={6} sm={2} >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={openModal}
          >
            Add a CD/DVD
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
        <TextField
          id="outlined-to-search"
          label="Filter items..."
          value={filterInput}
          onChange={(toSearch) => actions.setFilterInput(toSearch.target.value)}
          margin="normal"
          variant="standard"
          fullWidth
        />
        </Grid>
      </Grid>
      <Divider style={{ margin: "24px auto" }}/>
    </>
  )
}

export default HomeHeader;
