/* eslint-disable require-jsdoc */
import React from 'react';
import { Menu, Header, Button } from 'semantic-ui-react';

export default function TopMenuBar() {
    return (
        <Menu className="masthead">
            <Menu.Item>
                <Header inverted content="Product List" />
            </Menu.Item>
            <Menu.Item position="right">
                <Button
                    inverted
                    icon="linkedin"
                    as="a"
                    target="_blank"
                    href={'https://www.linkedin.com/in/santhoshkumar/'}
                />
            </Menu.Item>
            <Menu.Item>
                <Button
                    inverted
                    icon="github"
                    as="a"
                    target="_blank"
                    href={'https://github.com/santhoshpkumar/interactive-code-test'}
                />
            </Menu.Item>
        </Menu>
    );
}
