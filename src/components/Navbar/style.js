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
        background: linear-gradient(to left, rgba(11,13,23,1), rgba(255, 255, 255,10%));
        -webkit-backdrop-filter: blur(1.5rem);
        backdrop-filter: blur(1.5rem);
        width:100%;
        max-width:83rem;
        margin-left:9.3rem;
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
    @media (min-width:1024px){
        padding-right:5.6rem;
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
        position:relative;
        
        &.active{
            border-right:none;
            &::before{
                position:absolute;
                content:'';
                width:calc(100% - 3.2rem);
                height:0.3rem;
                background:${({theme})=>theme.color.primary};
                bottom:-0.3rem;
                left:50%;
                transform: translateX(-50%);
                transition:width .2s ease;
            }
        }
        &:hover{
           &:after{
               width:calc(100% - 3.2rem);
           }
        }
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
    }
    @media (min-width:1024px){
        width:auto;
        padding:0 3.2rem;
        &:hover{
            &::after{
                width:calc(100% - 6.4rem);
            }
         }
         &.active{
             &::before{
                width:calc(100% - 6.4rem);
             }
         }
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