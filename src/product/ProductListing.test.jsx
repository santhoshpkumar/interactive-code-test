import React from 'react';
import ProductListing from './ProductListing';
import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';

describe('test ProductListing Component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    test('renders single product', () => {
        useSelectorMock.mockReturnValue({
            products: [{ productName: 'Product 1', index: 0 }],
            filters: [],
            searchText: '',
        });
        const { getByText } = render(<ProductListing />);
        expect(getByText('Product 1')).not.toBeNull();
    });

    test('renders multiple product', () => {
        useSelectorMock.mockReturnValue({
            products: [
                { productName: 'Product 1', index: 0 },
                { productName: 'Product 2', index: 1 },
            ],
            filters: [],
            searchText: '',
        });
        const { getByText } = render(<ProductListing />);
        expect(getByText('Product 1')).not.toBeNull();
        expect(getByText('Product 2')).not.toBeNull();
    });

    test('renders only products as per filter selection', () => {
        useSelectorMock.mockReturnValue({
            products: [
                { productName: 'Product 1', index: 0, type: 'type 1' },
                { productName: 'Product 2', index: 1, type: 'type 2' },
            ],
            filters: ['type 1'],
            searchText: '',
        });
        const { getByText, queryByText } = render(<ProductListing />);
        expect(getByText('Product 1')).not.toBeNull();
        expect(queryByText('Product 2')).toBeNull();
    });

    test('renders only products matching search', () => {
        useSelectorMock.mockReturnValue({
            products: [
                { productName: 'aaaaaaaaa', index: 0, type: 'type 1' },
                { productName: 'bbbbbbbbb', index: 1, type: 'type 2' },
            ],
            filters: [],
            searchText: 'aaaa',
        });
        const { getByText, queryByText } = render(<ProductListing />);
        expect(getByText('aaaaaaaaa')).not.toBeNull();
        expect(queryByText('bbbbbbbbb')).toBeNull();
    });
});
