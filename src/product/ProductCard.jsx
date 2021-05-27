/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react';
import faker from 'faker';

export default function ProductListing({ product }) {
    const { isSale, productImage, productName, type, price } = product;
    return (
        <Card>
            {isSale ? (
                <Image
                    label={{
                        as: 'a',
                        corner: 'left',
                        color: 'red',
                        content: 'Sale',
                    }}
                    src={productImage ? productImage : faker.image.food()}
                    wrapped
                    ui={false}
                />
            ) : (
                <Image src={productImage ? productImage : faker.image.food()} wrapped ui={false} />
            )}
            <Card.Content>
                <Card.Meta>{type}</Card.Meta>
                <Card.Description>{productName}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="tag" />
                {price}
            </Card.Content>
        </Card>
    );
}
