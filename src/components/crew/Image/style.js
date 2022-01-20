import styled from 'styled-components';

export const Container = styled.div`
    grid-area:image;
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:center;    
    border-bottom:1px solid ${({theme})=>theme.color.priamry};
    margin-bottom:3.2rem;
    @media (min-width:768px){
        margin-bottom:0;
    }
    @media (min-width:1024px){
        justify-content:right;
        margin-top:14.8rem;
    }
    `
export const Img = styled.img`
    width:56%;
    object-fit: contain;
    @media (min-width:768px){
        max-height:51rem;
    }
    @media (min-width:1024px){
        width:auto;
        height:100%;
        max-width:56.8rem;
        height:auto;
        max-height:71.2rem;
    }
`