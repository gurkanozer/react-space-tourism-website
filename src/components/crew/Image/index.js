import React from 'react';
import {Container,Img} from './style';
const Image = ({data}) => {
  return (
      <Container>
          <Img src={`${process.env.PUBLIC_URL}${data.images.png}`} alt={data.name}/>
      </Container>
  );
};

export default Image;
