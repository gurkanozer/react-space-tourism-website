import React from 'react';
import {Container} from './style';

const Main = ({ bg, children,...props }) => {
    return (
        <Container bg={bg}>
            {children}
        </Container>
    )
}

export default Main
