import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('renders Footer component', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Interative Code Test')).not.toBeNull();
});
