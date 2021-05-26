/* eslint-disable require-jsdoc */
import React from 'react';
import ProductListing from './product/ProductListing';
import { Header, Container } from 'semantic-ui-react';

function App() {
    return (
        <Container>
            <Header content="Product List" />
            <ProductListing />;
        </Container>
    );
}

export default App;
