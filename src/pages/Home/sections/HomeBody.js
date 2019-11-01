import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';
import CardItem from '#components/CardItem';

import useActions from '#hooks/useActions';
import { getItems } from '#modules/Items/actions';
import { selectItems } from '#modules/Items/selectors';

const HomeBody = () => {
  /* Selectors */
  const { items } = useSelector(selectItems());

  /* Actions */
  const actions = useActions({
    getItems
  });

  /* Effects */
  useEffect(() => {
    actions.getItems();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>Rented Out</Typography>
      <Grid container spacing={4}>
        {items.map(item => item.rent && <CardItem item key={item.id} data={item} />)}
      </Grid>

      <Divider style={{ margin: "24px auto" }}/>

      <Typography variant="h4" gutterBottom>In Store</Typography>
      <Grid container spacing={4}>
        {items.map(item => <CardItem key={item.id} data={item} />)}
      </Grid>
    </>
  );
}

export default HomeBody;
