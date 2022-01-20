import React from 'react';
import {Container, DotContainer, Dot, Role, Name, Bio} from './style';
const Tabs = ({data, tabLinks, activeTabHandler}) => {
  return(
    <Container>
      <DotContainer>
        {
          tabLinks.map((link, index)=>(
            <Dot
            key={index}
            aria-label={link}
            className={link === data.name ? 'active':''}
            onClick={()=>activeTabHandler(link)}
          />
          ))
        }
      </DotContainer>
      <Role>{data.role}</Role>
      <Name>{data.name}</Name>
      <Bio>{data.bio}</Bio>
    </Container>
  );
};

export default Tabs;
