import styled from 'styled-components';

export const Container = styled.section`
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
        flex-direction:row;
        justify-content:space-between;
        align-items:flex-end;
    }
    `
export const Content = styled.div`
    width:100%;
    max-width:45rem;
    padding:11.2rem 0 0;
    text-align:center;
    @media (min-width:768px){
        max-width:44.4rem;
        padding:20.2rem 0 0;
    }
    @media (min-width:1024px){
        text-align:left;
        margin-bottom:13.1rem;
    }

`
export const SubTitle = styled.h5`
    letter-spacing:2.7px;
    text-transform:uppercase;
    font-family:${({theme})=>theme.font.tertiary};
    @media (min-width:1024px){
        letter-spacing:4.72px;
    }
    `
export const Title = styled.h1`
    padding:1.6rem 0;
    text-transform:uppercase;
    @media (min-width:768px){
        padding:2.4rem 0;
    }
`
export const Paragraph = styled.p`
`

export const Explore = styled.button`
    margin-top:8.1rem;
    width:15rem;
    height:15rem;
    background:${({theme})=>theme.color.secondary};
    border-radius:50%;
    font-size:2rem;
    font-weight:400;
    color:${({theme})=>theme.color.tertiary};
    letter-spacing:1.25px;
    @media (min-width:768px){
        margin-top:15.6rem;
        width:24.2rem;
        height:24.2rem;
        font-size:3.2rem;
    }
    @media (min-width:1024px){
        width:27.5rem;
        height:27.5rem;
        margin-bottom:13.1rem;
    }
`