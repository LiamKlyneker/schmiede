const defaultState = {
  isFetching: true,
  items: [],
  rentedOnes: [],
};

const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_ITEMS_SUCCESS':
      const itemsToSet = action.payload.data.splice(0, 10).reduce((newArray, item) => {
        item.rent = false;
        newArray.push(item);
        return newArray;
      }, []);
      return {
        ...state,
        isFetching: false,
        items: itemsToSet,
      };
    
    case 'DELETE_ITEM_SUCCESS':
      const idToDelete = state.items.findIndex(item => item.id === action.id);
      const newItems = [...state.items];
      newItems.splice(idToDelete, 1);
      return {
        ...state,
        items: newItems,
      };

    case 'RENT_ITEM':
      const itemToRentIndex = state.items.findIndex(item => item.id === action.payload.id);
      const itemToRent = { ...state.items[itemToRentIndex] };
      itemToRent.rent = true;
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemToRentIndex),
          itemToRent,
          ...state.items.slice(itemToRentIndex + 1),
        ],
      };

    case 'RETURN_ITEM':
      const itemToReturnIndex = state.items.findIndex(item => item.id === action.payload.id);
      const itemToReturn = { ...state.items[itemToReturnIndex] };
      itemToReturn.rent = false;
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemToReturnIndex),
          itemToReturn,
          ...state.items.slice(itemToReturnIndex + 1),
        ],
      };
    default:
      return state;
  }
};

export default itemsReducer;
