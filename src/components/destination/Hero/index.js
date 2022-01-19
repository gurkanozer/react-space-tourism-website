import React from 'react'
import {Container, Title, Number, Image} from './style';
const Hero = () => {
    return (
        <Container>
            <Title><Number>01</Number> Pick your destination</Title>
            <Image src={`${process.env.PUBLIC_URL}/assets/destination/image-moon.png`}/>
        </Container>
    )
}

export default Hero
