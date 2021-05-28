/* eslint-disable require-jsdoc */
import { FETCH_PRODUCTS, UPDATE_SEARCH_TEXT, UPDATE_FILTER } from './productActions';
import productData from './../api/data';

const initialState = { products: productData, filters: [], searchText: '' };

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
