import React from 'react';

import useActions from '../../hooks/useActions';
import { deleteItem, rentItem, returnItem } from '../../modules/Items/actions';

import './styles.scss';

const Card = ({
  data: { id, title, thumbnailUrl, rent },
}) => {
  /* Actions */
  const actions = useActions({
    deleteItem,
    rentItem,
    returnItem,
  });

  /* Methods */
  const handleDeleteItem = () => {
    actions.deleteItem(id);
  };

  const handleRentItem = () => {
    actions.rentItem(id);
  };

  const handleReturnItem = () => {
    actions.returnItem(id);
  }

  return (
    <div className="card">
      <figure>
        <img src={thumbnailUrl} alt="thumbnail" />
      </figure>
      <p className="card__title">{ title }</p>
      <div className="card__options">
        {!rent && <button onClick={handleRentItem}>Rent</button>}
        {rent && <button onClick={handleReturnItem}>Return</button>}
        <button onClick={handleDeleteItem}>Delete</button>
        </div>
    </div>
  );
};

Card.defaultProps = {
  rented: false,
};

export default Card;
