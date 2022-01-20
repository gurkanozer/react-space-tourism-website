import styled from 'styled-components';

export const Section = styled.section`
    width:100%;
    height:100%;
    min-height:100vh;
    margin:0 auto;
    max-width:111rem;
    display:flex;
    flex-direction:column;
    padding-top:8.8rem;
    @media (min-width:768px){
        padding-top:13.8rem;
        display:grid;
        grid-template-areas:"title" "tabs" "image" ;
    }
    @media (min-width:1024px){
        grid-template-columns: 44.4rem 1fr;
        grid-template-areas: "title image" "tabs image";
        padding-top:0;
    }
`