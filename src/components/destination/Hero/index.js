import React from "react";
import { Container, Title, Number, Image } from "./style";
const Hero = ({ data }) => {
  return (
    <Container layout>
      <Title>
        <Number>01</Number> Pick your destination
      </Title>
      <Image
        key={`${process.env.PUBLIC_URL}${data.images.png}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        src={`${process.env.PUBLIC_URL}${data.images.png}`}
        alt={data.name}
      />
    </Container>
  );
};

export default Hero;
