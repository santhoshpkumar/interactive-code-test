import { updateSearchText, updateFilter, fetchProducts } from './productActions';
import { UPDATE_FILTER, UPDATE_SEARCH_TEXT, FETCH_PRODUCTS } from './productActions';

describe('actions', () => {
    it('should create an action to update search text', () => {
        const searchText = 'searchtext';
        const expectedAction = {
            type: UPDATE_SEARCH_TEXT,
            payload: searchText,
        };
        expect(updateSearchText(searchText)).toEqual(expectedAction);
    });
    it('should create an action to update filter by', () => {
        const filters = ['filter1', 'filter2'];
        const expectedAction = {
            type: UPDATE_FILTER,
            payload: filters,
        };
        expect(updateFilter(filters)).toEqual(expectedAction);
    });
    it('should create an action to fetch products', () => {
        const products = ['product', 'product2'];
        const expectedAction = {
            type: FETCH_PRODUCTS,
            payload: products,
        };
        expect(fetchProducts(products)).toEqual(expectedAction);
    });
});
