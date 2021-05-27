/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ProductCard from './ProductCard';

export default function ProductListing() {
    const { products, searchText } = useSelector((state) => state.product);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchText) {
            const productsList = products.filter((product) => {
                return product.productName.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredProducts(productsList);
        } else {
            setFilteredProducts(products);
        }
    }, [searchText, products]);

    return (
        <Grid align="center">
            {filteredProducts.map((product) => {
                return (
                    <Grid.Column key={product.index} mobile={16} tablet={8} computer={4}>
                        <ProductCard product={product} />
                    </Grid.Column>
                );
            })}
        </Grid>
    );
}
