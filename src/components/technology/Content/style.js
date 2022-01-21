import styled from 'styled-components';

export const ContentContainer = styled.div`
    padding:0 2.4rem;
    text-align:center;
    max-width:48.2rem;
    grid-area:content;
    @media (min-width:1024px){
        max-width:47rem;
        padding:0;
        text-align:left;
        z-index:10;
    }
`
export const SubTitle = styled.p`
text-transform:uppercase;
margin-bottom:0.9rem;
`
export const Name = styled.h3`
text-transform:uppercase;
margin-bottom:1.6rem;
`
export const Description = styled.p``