/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Grid, Select } from 'semantic-ui-react';
import { updateSearchText } from './../product/productActions';
import * as _ from 'lodash';

export default function TopMenuBar() {
    const [filterOptions, setFilterOptions] = useState([]);
    const { products, searchText } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const options = products.map((product) => ({
            key: product.type,
            value: product.type,
            text: product.type,
        }));
        const newOptions = _.uniqBy(options, 'key');
        setFilterOptions(newOptions);
    }, [products]);

    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8} align="start">
                <Input
                    fluid
                    icon="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e, d) => {
                        dispatch(updateSearchText(d.value));
                    }}
                />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8} align="end">
                <Select placeholder="Filter By" options={filterOptions} fluid multiple />
            </Grid.Column>
        </Grid>
    );
}
