import React from 'react';
import { Message, Icon, Container } from 'semantic-ui-react';

const MessageExampleIcon = () => (
    <Container>
        <Message icon>
            <Icon name="ban" />
            <Message.Content>No matching products found.</Message.Content>
        </Message>
    </Container>
);

export default MessageExampleIcon;
