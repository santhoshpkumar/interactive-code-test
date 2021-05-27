import { render } from '@testing-library/react';
import React from 'react';
import TopHeader from './TopHeader';

test('renders TopHeader component', () => {
    const { getByText } = render(<TopHeader />);
    expect(getByText('Product List')).not.toBeNull();
});
