import { createSelector } from 'reselect';

export const selectItemsData = () => state => state['items'];

export const selectItems = () =>
  createSelector(
    selectItemsData(),
    state => state
  );
