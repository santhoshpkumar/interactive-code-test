import { render } from '@testing-library/react';
import React from 'react';
import NoProductsFround from './NoProductsFound';

test('renders No Products Found component', () => {
    const { getByText } = render(<NoProductsFround />);
    expect(getByText('No matching products found.')).not.toBeNull();
});
