/* eslint-disable require-jsdoc */
import { FETCH_PRODUCTS, UPDATE_SEARCH_TEXT, UPDATE_FILTER } from './productActions';
import productDate from './../api/data';

export function fetchProducts(payload) {
    return {
        type: FETCH_PRODUCTS,
        payload,
    };
}

const initialState = { products: productDate, filters: [], searchText: '' };

export default function productReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: payload,
            };
        case UPDATE_FILTER:
            return {
                ...state,
                filters: payload,
            };
        default:
            return state;
    }
}
