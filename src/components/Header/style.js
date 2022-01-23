import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.header`
    width:100%;
    position:fixed;
    top:0;
    left:0;
    overflow:hidden;
    display:flex;
    align-items:center;
    @media (min-width:768px){
        position:absolute;
    }
    @media (min-width:1024px){
        padding-top:4rem;
    }
`
export const Inner = styled.div`
    width:100%;
    max-width:126.8rem;
    margin:0 auto;
    padding:2.4rem;
    display:flex;
    align-items:center;
    justify-content:right;

    @media (min-width:768px){
        padding:0 3.9rem;
        height:9.6rem;
    }
    @media (min-width:1024px){
        padding-left:0;
        justify-content:space-between;
    }
`

export const Brand = styled(Link)`
    background:none;
    text-decoration:none;
    margin-left:2.4rem;
    @media (min-width:768px){
        margin-left:5.5rem;
    }

`
export const BrandLogo = styled.img`
    width:4rem;
    height:4rem;
    @media (min-width:768px){
        width:4.8rem;
        height:4.8rem;
    }
`
export const ToggleBtn = styled.button`
    display:block;
    @media (min-width:768px){
        display:none;
    }
`
export const MenuIcon = styled.img`
    width:24;
    height21:
`

export const Line = styled.div`
    width:100%;
    height:0.1rem;
    background:${({theme})=>theme.color.primary};
    display:none;
    @media (min-width:1024px){
        display:block;
    }
`