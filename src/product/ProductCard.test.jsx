import React from 'react';
import ProductCard from './ProductCard';
import { render } from '@testing-library/react';

describe('test ProductCard Component', () => {
    test('renders sale label when product is on sale', () => {
        const { getByText, queryByText } = render(
            <ProductCard product={{ isSale: true, productName: 'Product 1', price: 'price' }} />,
        );
        expect(getByText('Product 1')).not.toBeNull();
        expect(queryByText('price')).not.toBeNull();
        expect(queryByText('Sale')).not.toBeNull();
    });

    test('renders product component without sale label when product is not on sale', () => {
        const { queryByText } = render(<ProductCard product={{ isSale: false }} />);
        expect(queryByText('sale')).toBeNull();
    });
});
