import React,{useState, useEffect} from 'react';
import {Container, Img} from './style';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Image = ({data}) => {
  const { width } = useWindowDimensions();
  const [img, setImg] = useState();
  useEffect(()=>{
    if(width >=1024){
      setImg(data.images.portrait)
    }
    else setImg(data.images.landscape);
  },[width,data]);
  return (
      <Container>
          <Img src={`${process.env.PUBLIC_URL}${img}`} alt={data.name}/>
      </Container>
  );
};

export default Image;
