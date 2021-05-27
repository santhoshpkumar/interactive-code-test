import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import TopMenuBar from './TopMenuBar';
import * as reactRedux from 'react-redux';
import uniqBy from 'lodash/uniqBy';

// Tell jest to mock the module
jest.mock('lodash/uniqBy');

describe('test TopMenuBar', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    beforeEach(() => {
        useSelectorMock.mockReturnValue({
            products: [{ type: 'typeOne' }],
            searchText: '',
        });
        uniqBy.mockReturnValueOnce([
            {
                key: 'test',
                value: 'test',
                text: 'test',
            },
        ]);
    });

    test('renders TopMenuBar component', () => {
        const { getByText, getByPlaceholderText } = render(<TopMenuBar />);
        expect(getByPlaceholderText('Search...')).not.toBeNull();
        expect(getByText('Filter By')).not.toBeNull();
    });

    test('search triggers dispatch event', () => {
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);
        const { getByPlaceholderText } = render(<TopMenuBar />);
        const input = getByPlaceholderText('Search...');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(dummyDispatch).toHaveBeenCalledTimes(1);
    });

    test('filter change should triggers dispatch event', () => {
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);
        const { getByTestId, getAllByRole } = render(<TopMenuBar />);
        const dropdown = getByTestId('dropdown');
        fireEvent.click(dropdown);
        const dropdownOption = getAllByRole('option').find((ele) => ele.textContent === 'test');
        fireEvent.click(dropdownOption);
        expect(dummyDispatch).toHaveBeenCalledTimes(1);
    });
});
