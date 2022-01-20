import styled from 'styled-components';

export const Section = styled.section`
    width:100%;
    height:100%;
    min-height:100vh;
    max-width:111rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding-top:8.8rem;
    @media (min-width:768px){
        padding-top:13.6rem;
    }
    @media (min-width:1024px){
        display:grid;
        grid-template-areas:"title title title" "dots content image" ;
        grid-template-rows:3.4rem 1fr;
        margin:0 auto;
    }
`