import { updateSearchText, updateFilter } from './productActions';
import { UPDATE_FILTER, UPDATE_SEARCH_TEXT } from './productActions';

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
});
