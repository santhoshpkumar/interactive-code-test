/* eslint-disable require-jsdoc */
import React from 'react';
import { Input, Grid, Select } from 'semantic-ui-react';
import faker from 'faker';

const filterOptions = [
    { key: faker.lorem.word(), value: faker.lorem.word(), text: faker.lorem.word() },
    { key: faker.lorem.word(), value: faker.lorem.word(), text: faker.lorem.word() },
    { key: faker.lorem.word(), value: faker.lorem.word(), text: faker.lorem.word() },
    { key: faker.lorem.word(), value: faker.lorem.word(), text: faker.lorem.word() },
];

export default function TopMenuBar() {
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
