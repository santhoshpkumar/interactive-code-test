import reducer from './productReducer';
import * as types from './productActions';
import productDate from './../api/data';

describe('products reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            products: productDate,
            filters: [],
            searchText: '',
        });
    });

    it('should handle UPDATE_SEARCH_TEXT', () => {
        const searchText = 'search text';
        expect(
            reducer([], {
                type: types.UPDATE_SEARCH_TEXT,
                payload: searchText,
            }),
        ).toEqual({
            searchText: searchText,
        });
    });

    it('should handle UPDATE_FILTER', () => {
        const filters = ['filter'];
        expect(
            reducer([], {
                type: types.UPDATE_FILTER,
                payload: filters,
            }),
        ).toEqual({
            filters: filters,
        });
    });

    it('should handle FETCH_PRODUCTS', () => {
        const products = [{ product: 'product' }];
        expect(
            reducer([], {
                type: types.FETCH_PRODUCTS,
                payload: products,
            }),
        ).toEqual({
            products: products,
        });
    });
});
