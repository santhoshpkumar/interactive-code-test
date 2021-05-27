/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react';
import faker from 'faker';

export default function ProductListing({ product }) {
    const { isSale, productImage, productName, type, price } = product;
    return (
        <Card>
            <Image
                src={productImage ? productImage : faker.image.food()}
                label={
                    isSale
                        ? {
                              as: 'a',
                              corner: 'left',
                              color: 'red',
                              content: 'Sale',
                          }
                        : null
                }
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Meta>{type}</Card.Meta>
                <Card.Description>{productName}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name={isSale ? 'tags' : 'tag'} color={isSale ? 'red' : null} />
                {price}
            </Card.Content>
        </Card>
    );
}
