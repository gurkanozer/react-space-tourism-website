import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
    width:25.4rem;
    height:100vh;
    background: linear-gradient( rgba(11,13,23,1), rgba(255, 255, 255,10%));
    -webkit-backdrop-filter: blur(1.5rem);
    backdrop-filter: blur(1.5rem);
    position:fixed;
    top:0;
    right:0;
    display:none;
    &.active{
        display:block;
    }
    @media (min-width:768px){
        position:absolute;
        display:block;
        height:9.6rem;
        width:auto;

    }
    @media (min-width:1024px){
        position:relative;
        background:none;
        &::after{
            content:"";
            position:absolute;
            width:100vw;
            height:9.6rem;
            top:0;
            left:-12.3rem;
            background: linear-gradient(to left, rgba(11,13,23,1), rgba(255, 255, 255,10%));
            -webkit-backdrop-filter: blur(1.5rem);
            backdrop-filter: blur(1.5rem);
            z-index:0;
        }
    }
`

export const List = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:11.8rem;
    width:100%;
    @media (min-width:768px){
        flex-direction:row;
        margin:0;
        padding:0 3.2rem;
    }
`

export const Link = styled(NavLink)`
    width:100%;
    font-size:1.6rem;
    text-transform:uppercase;
    color:${({theme})=>theme.color.primary};
    font-family:${({theme})=>theme.font.tertiary};
    margin-bottom:3.2rem;
    padding-left:3.2rem;
    display:flex;
    z-index:10;
    transition:all .4s ease;
    &.active{
        border-right:0.4rem solid ${({theme})=>theme.color.primary};
    }
    @media (min-width:768px){
        line-height:9.3rem;
        padding:0 1.6rem;
        border-bottom: 0.3rem solid transparent;
        &.active{
            border-right:none;
            border-bottom:0.3rem solid ${({theme})=>theme.color.primary};
        }
        position:relative;
        &::after{
            position:absolute;
            content:'';
            width:0;
            height:0.3rem;
            background:${({theme})=>theme.color.primary};
            bottom:-0.3rem;
            left:50%;
            transform: translateX(-50%);
            transition:width .2s ease;
        }
        &:hover{
           &:after{
               width:100%;
           }
        }
    }
    @media (min-width:1024px){
        padding:0 2.4rem;
    }
    `

export const Number = styled.span`
    display:inline-block;
    width:3rem;
    height:1.9rem;
    color:${({theme})=>theme.color.secondary};
    font-family:${({theme})=>theme.font.tertiary};
    font-weight:600;
    @media (min-width:768px){
        display:none;
    }
    @media (min-width:1024px){
        display:inline-block;
    }
`
export const Close = styled.button`
    width:2rem;
    height:2rem;
    background: url('${process.env.PUBLIC_URL}/assets/shared/icon-close.svg') no-repeat bottom center;
    background-size:cover;
    position:absolute;
    top:3.6rem;
    right:2.6rem;
    @media (min-width:768px){
        display:none;
    }
    `