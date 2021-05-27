/* eslint-disable require-jsdoc */
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ProductCard from './ProductCard';

export default function ProductListing() {
    const { products } = useSelector((state) => state.product);
    return (
        <Grid align="center">
            {products.map((product) => {
                return (
                    <Grid.Column key={product.index} mobile={16} tablet={8} computer={4}>
                        <ProductCard product={product} />
                    </Grid.Column>
                );
            })}
        </Grid>
    );
}
