import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

import useActions from '../hooks/useActions';
import { getItems } from '../modules/Items/actions';
import { selectItems } from '../modules/Items/selectors';

import './styles.scss';

const Home = () => {
  /* Selectors */
  const { items, rentedOnes } = useSelector(selectItems());

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
      <h2>Rented Out</h2>
      <div className="cardsList">
      {items.map(item => item.rent && <Card key={item.id} data={item} rented />)}
      </div>
      <hr />
      <h2>In Store</h2>
      <div className="cardsList">
        {items.map(item => <Card key={item.id} data={item} />)}
      </div>
    </>
  );
};

export default Home;
