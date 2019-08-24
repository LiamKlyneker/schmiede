import React, { useState } from 'react';

import { Container } from '@material-ui/core';
import HomeHeader from '#pages/Home/sections/HomeHeader';
import HomeBody from '#pages/Home/sections/HomeBody';
import ItemModal from '#components/ItemModal'


const Home = () => {
  /* States */
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  return (
    <Container maxWidth="lg" style={{ marginTop: '6rem' }}>
      <HomeHeader openModal={() => setIsItemModalOpen(true)} />
      <HomeBody />
      <ItemModal
        isOpen={isItemModalOpen}
        handleClose={() => setIsItemModalOpen(false)}
      />
    </Container>
  );
};

export default Home;
