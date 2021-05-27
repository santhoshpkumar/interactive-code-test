/* eslint-disable require-jsdoc */
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
// export const ADD_FILTER = 'ADD_FILTER';
// export const REMOVE_FILTER = 'ADD_FILTER';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
// const CLEAR_SEARCH = 'CLEAR_SEARCH';
// const CLEAR_FILTER = 'CLEAR_FILTER';

export function updateSearchText(searchText) {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: searchText,
    };
}
