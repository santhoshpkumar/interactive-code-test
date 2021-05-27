/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Input, Grid, Select } from 'semantic-ui-react';
// import faker from 'faker';
import * as _ from 'lodash';

export default function TopMenuBar() {
    const [filterOptions, setFilterOptions] = useState([]);
    const { products } = useSelector((state) => state.product);
    useEffect(() => {
        const options = products.map((product) => ({
            key: product.type,
            value: product.type,
            text: product.type,
        }));
        const newOptions = _.uniqBy(options, 'key');
        console.log(newOptions);
        setFilterOptions(newOptions);
    }, [products]);
    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8} align="start">
                <Input fluid icon="search" placeholder="Search..." />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8} align="end">
                <Select placeholder="Filter By" options={filterOptions} fluid multiple />
            </Grid.Column>
        </Grid>
    );
}
