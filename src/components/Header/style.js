import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.header`
    width:100%;
    position:fixed;
    top:0;
    left:0;
    overflow:hidden;
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
    justify-content:space-between;
    @media (min-width:768px){
        padding:0 3.9rem;
        height:9.6rem;
    }
    //1268 max width...
`

export const Brand = styled(Link)`
    background:none;
    text-decoration:none;

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