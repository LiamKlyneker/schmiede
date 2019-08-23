import axios from 'axios'

export function getRequestSuccess(type, response, id) {
  return {
    type: `${type}_SUCCESS`,
    payload: response,
    id,
  };
}

export function getRequestError(type, error) {
  return {
    type: `${type}_FAILURE`,
    payload: error
  };
}

export const getItems = () => dispatch => {
  const request = axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos',
  });
  
  request.then((response) => {
    dispatch(getRequestSuccess('GET_ITEMS', response));
  })
  .catch((err) => {
    dispatch(getRequestError('GET_ITEMS', err))
  })
  
  return {
    type: 'GET_ITEMS',
    payload: request
  };
};

export const deleteItem = (id) => dispatch => {
  const request = axios({
    method: 'DELETE',
    url: `https://jsonplaceholder.typicode.com/photos/${id}`,
    id,
  })
  request.then((response) => {
    dispatch(getRequestSuccess('DELETE_ITEM', response, id));
  })
  .catch((err) => {
    dispatch(getRequestError('DELETE_ITEM', err))
  })

  return {
    type: 'DELETE_ITEM',
    payload: request,
  };
}

export const rentItem = (id) => dispatch => {
  dispatch({
    type: 'RENT_ITEM',
    payload: { id },
  });
}

export const returnItem = (id) => dispatch => {
  dispatch({
    type: 'RETURN_ITEM',
    payload: { id },
  });
}

