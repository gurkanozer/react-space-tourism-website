import styled from 'styled-components';

export const Section = styled.section`
    width:100%;
    height:100%;
    min-height:100vh;
    max-width:111rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    @media (min-width:1024px){
        display:grid;
        grid-template-columns:1fr 1fr;
        align-items:flex-start;
        padding-top:21.2rem;
    }
`