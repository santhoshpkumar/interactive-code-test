/* eslint-disable require-jsdoc */
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import faker from 'faker';

export default function ProductListing() {
    return (
        <Grid align="center">
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src={faker.image.food()} />
            </Grid.Column>
        </Grid>
    );
}
