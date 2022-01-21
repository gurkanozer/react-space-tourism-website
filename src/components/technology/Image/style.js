import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:3.4rem;
    @media (min-width:768px){
        margin-bottom:5.6rem;
    }
    @media (min-width:1024px){
        position:absolute;
        top:27.2rem;
        right:0;
        z-index:0;
    }
`
export const Img = styled.img`
    height:100%;
`