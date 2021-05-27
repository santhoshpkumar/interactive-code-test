/* eslint-disable require-jsdoc */
import React from 'react';
import ProductListing from './product/ProductListing';
import TopMenuBar from './header/TopMenuBar';
import TopHeader from './header/TopHeader';
import { Container } from 'semantic-ui-react';
import Footer from './footer/footer';

export default function App() {
    return (
        <Container>
            <br />
            <TopHeader />
            <TopMenuBar />
            <ProductListing />
            <Footer />
            <br />
        </Container>
    );
}
