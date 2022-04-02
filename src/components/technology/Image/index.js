import React, { useState, useEffect } from "react";
import { Container, Img } from "./style";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Image = ({ data }) => {
  const { width } = useWindowDimensions();
  const [img, setImg] = useState();
  useEffect(() => {
    if (width >= 1024) {
      setImg(data.images.portrait);
    } else setImg(data.images.landscape);
  }, [width, data]);
  return (
    <Container>
      <Img
        key={`${process.env.PUBLIC_URL}${img}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        src={`${process.env.PUBLIC_URL}${img}`}
        alt={data.name}
      />
    </Container>
  );
};

export default Image;
