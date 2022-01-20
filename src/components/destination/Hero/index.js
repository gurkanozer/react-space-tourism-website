import React from 'react'
import {Container, Title, Number, Image} from './style';
const Hero = ({data}) => {
    return (
        <Container>
            <Title><Number>01</Number> Pick your destination</Title>
            <Image src={`${process.env.PUBLIC_URL}${data.images.png}`} alt={data.name}/>
        </Container>
    )
}

export default Hero
