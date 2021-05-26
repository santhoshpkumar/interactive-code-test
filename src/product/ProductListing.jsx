/* eslint-disable require-jsdoc */
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Image, Card, Icon } from 'semantic-ui-react';
// import faker from 'faker';

export default function ProductListing() {
    const { products } = useSelector((state) => state.product);
    return (
        <Grid align="center">
            {products.map((product) => {
                return (
                    <Grid.Column key={product.index} mobile={16} tablet={8} computer={4}>
                        <Card>
                            {product.isSale ? (
                                <Image
                                    label={{
                                        as: 'a',
                                        corner: 'left',
                                        color: 'red',
                                        content: 'Sale',
                                    }}
                                    src={
                                        product.productImage
                                            ? product.productImage
                                            : fakerStatic.image.food()
                                    }
                                    wrapped
                                    ui={false}
                                />
                            ) : (
                                <Image
                                    src={
                                        product.productImage
                                            ? product.productImage
                                            : fakerStatic.image.food()
                                    }
                                    wrapped
                                    ui={false}
                                />
                            )}
                            <Card.Content>
                                <Card.Header>{product.type}</Card.Header>
                                <Card.Description>{product.productName}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name="tag" />
                                {product.price}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                );
            })}
        </Grid>
    );
}
