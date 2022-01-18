import React from 'react';
import {Container,Content, SubTitle, Title, Paragraph, Explore} from './style';

const Header = () => {
    return (
        <Container>
            <Content>
                <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
                <Title>SPACE</Title>
                <Paragraph>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</Paragraph>
            </Content>
            <Explore>EXPLORE</Explore>
        </Container>
    )
}

export default Header;
