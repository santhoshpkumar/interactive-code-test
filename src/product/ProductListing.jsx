/* eslint-disable require-jsdoc */
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import faker from 'faker';

export default function ProductListing() {
    return (
        <Grid>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={5}>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={faker.image.image()} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}
