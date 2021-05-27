/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import NoProductsFound from './NoProductsFound';

export default function ProductListing() {
    const { products, searchText, filters } = useSelector((state) => state.product);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let productsList = [...products];
        if (filters.length > 0) {
            productsList = productsList.filter((product) => {
                return filters.includes(product.type);
            });
        }
        if (searchText.length > 0) {
            productsList = productsList.filter((product) => {
                return product.productName.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredProducts(productsList);
        }
        setFilteredProducts(productsList);
    }, [searchText, products, filters]);

    return (
        <Grid align="center">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                    return (
                        <Grid.Column key={product.index} mobile={16} tablet={8} computer={4}>
                            <ProductCard product={product} />
                        </Grid.Column>
                    );
                })
            ) : (
                <NoProductsFound />
            )}
        </Grid>
    );
}
