/* eslint-disable require-jsdoc */
import React from 'react';
import { Menu, Header } from 'semantic-ui-react';

export default function TopMenuBar() {
    return (
        <Menu className="masthead">
            <Menu.Item>
                <Header inverted content="Product List" />
            </Menu.Item>
        </Menu>
    );
}
