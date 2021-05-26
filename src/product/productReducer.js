/* eslint-disable require-jsdoc */
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
// const UPDATE_FILTER = 'UPDATE_FILTER';
// const UPDATE_SEARCH = 'UPDATE_SEARCH';
// const CLEAR_SEARCH = 'CLEAR_SEARCH';
// const CLEAR_FILTER = 'CLEAR_FILTER';

export function fetchProducts(payload) {
    return {
        type: FETCH_PRODUCTS,
        payload,
    };
}

const initialState = { products: [], filters: [], search: '' };

export default function productReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: payload,
            };

        default:
            return state;
    }
}
