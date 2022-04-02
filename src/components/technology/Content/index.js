import React from "react";
import { ContentContainer, SubTitle, Name, Description } from "./style";

const Content = ({ data }) => {
  return (
    <ContentContainer
      key={data.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <SubTitle>The Terminology...</SubTitle>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
    </ContentContainer>
  );
};

export default Content;
