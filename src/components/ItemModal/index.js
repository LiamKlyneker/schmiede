import React from 'react';

import { Modal, Container, Typography, TextField, Button } from '@material-ui/core';

import useActions from '#hooks/useActions';
import { addItem } from '#modules/Items/actions';

const ItemModal = ({
  isOpen,
  handleClose,
}) => {
  /* Actions */
  const actions = useActions({ addItem });

  /* States */
  const [values, setValues] = React.useState({
    image: '',
    name: '',
  });

  /* Methods */
  const handleChange = name => event =>
    setValues({ ...values, [name]: event.target.value });

  const handleAddItem = () => {
    const dataToSave = {
      thumbnailUrl: values.image,
      title: values.name,
    };
    actions.addItem(dataToSave);
    setTimeout(() => {
      cleanForm();
      handleClose();
    }, 500);
  };

  const cleanForm = () => {
    setValues({ image: '', name: '' });
  };

  return (
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
        style={{ padding: 32 }}
      >
      <Container maxWidth="sm" style={{ background: "white", padding: 32 }}>
        <Typography variant="h4" gutterBottom>Add a CD/DVD</Typography>
        <TextField
          id="outlined-image-url"
          label="Image URL"
          value={values.image}
          onChange={handleChange('image')}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-name"
          label="Name"
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 24 }}
          onClick={handleAddItem}
        >
          Add
        </Button>
      </Container>
    </Modal>
  );
}

export default ItemModal;
