/* eslint-disable require-jsdoc */
import React from 'react';
import ProductListing from './product/ProductListing';
import { Menu, Container, Input, Grid, Select, Header } from 'semantic-ui-react';

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
];

function App() {
    return (
        <Container>
            <br />
            <Menu className="masthead">
                <Menu.Item>
                    <Header inverted content="Product List" />
                </Menu.Item>
            </Menu>
            <Grid>
                <Grid.Column mobile={16} tablet={8} computer={8} align="start">
                    <Input fluid icon="search" placeholder="Search..." />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8} align="end">
                    <Select placeholder="Filter By" options={countryOptions} fluid multiple />
                </Grid.Column>
            </Grid>
            <ProductListing />;
        </Container>
    );
}

export default App;
