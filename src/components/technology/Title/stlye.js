import styled from "styled-components";


export const Text = styled.h5`
    grid-area:title;
    width:100%;
    color:${({theme})=> theme.color.primary};
    font-family: ${({theme})=> theme.font.tertiary};
    text-transform: uppercase;
    text-align:center;
    letter-spacing:2.7px;
    margin-bottom:3.2rem;
    @media (min-width:768px){
        text-align:left;
        margin-bottom:6rem;
        padding-left:2.4rem;
    }
    @media (min-width:1024px){
        margin-top:21.2rem;
        margin-bottom:9.7rem;
    }

`
export const Number = styled.span`
    color:${({theme})=> theme.color.secondary};
    margin-right:1.8rem;
`