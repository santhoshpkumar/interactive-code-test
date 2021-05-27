/* eslint-disable require-jsdoc */
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
// const CLEAR_SEARCH = 'CLEAR_SEARCH';
// const CLEAR_FILTER = 'CLEAR_FILTER';

export function updateSearchText(searchText) {
    return {
        type: UPDATE_SEARCH_TEXT,
        payload: searchText,
    };
}

export function updateFilter(filterBy) {
    return {
        type: UPDATE_FILTER,
        payload: filterBy,
    };
}

export function fetchProducts(payload) {
    return {
        type: FETCH_PRODUCTS,
        payload,
    };
}
