import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core';

import useActions from '../../hooks/useActions';
import { deleteItem, rentItem, returnItem } from '../../modules/Items/actions';
import { selectItems } from '#modules/Items/selectors';

const CardItem = ({
  data: { id, title, thumbnailUrl, rent },
}) => {
  /* Selectors */
  const { filterInput } = useSelector(selectItems());

  /* Actions */
  const actions = useActions({
    deleteItem,
    rentItem,
    returnItem,
  });

  /* States */
  const [filterShow, setFilterShow] = useState(true);

  /* Effects */
  useEffect(() => handleFiltering(), [filterInput]);

  /* Methods */
  const handleDeleteItem = () => actions.deleteItem(id);

  const handleRentItem = () => actions.rentItem(id);

  const handleReturnItem = () => actions.returnItem(id);

  const handleFiltering = () =>
    setFilterShow(title.search(filterInput.trim()) >= 0 || !filterInput);

  return (
    <Grid item xs={12} sm={4} style={{ display: filterShow ? 'block' : 'none' }}>
      <Card>
        <CardMedia
          image={thumbnailUrl}
          title="Thumbnail"
          style={{ height: 140 }}
        />
        <CardContent>
          <p className="card__title">{ title }</p>
        </CardContent>
        <CardActions>
          {!rent && (
            <>
              <Button
                size="small"
                color="primary"
                onClick={handleRentItem}
              >
                Rent
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={handleDeleteItem}
              >
                Delete
              </Button>
            </>
          )}
          {rent && (
            <Button
              size="small"
              color="warning"
              onClick={handleReturnItem}
            >
              Return
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

CardItem.defaultProps = {
  rented: false,
};

export default CardItem;
