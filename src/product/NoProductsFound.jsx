import React from 'react';
import { Message, Icon, Container } from 'semantic-ui-react';

const MessageExampleIcon = () => (
    <Container>
        <Message icon color="blue">
            <Icon name="ban" color="blue" />
            <Message.Content>No matching products found.</Message.Content>
        </Message>
    </Container>
);

export default MessageExampleIcon;
