import React from 'react';
import { ContentContainer, SubTitle, Name, Description } from './style';

const Content = ({data}) => {
  return(
      <ContentContainer>
          <SubTitle>The Terminology...</SubTitle>
          <Name>{data.name}</Name>
          <Description>{data.description}</Description>
      </ContentContainer>
  );
};

export default Content;
