import styled from 'styled-components';

export const DotContainer = styled.ul`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:2.6rem;
grid-area:dots;
@media (min-width:768px){
    margin-bottom:4.4rem;
}
@media (min-width:1024px){
    flex-direction:column;
    margin-bottom:0;
    margin-right:8rem;
}
`

export const DotLink = styled.li`
    width:4rem;
    height:4rem;
    border-radius:50%;
    background:${({theme})=>theme.color.tertiary};
    border:1px solid ${({theme})=>theme.color.secondary};
    color:${({theme})=>theme.color.secondary};
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.6rem;
    font-weight:600;
    &:not(:last-child){
        margin-right:1.6rem;
    }
    &.active{
        background:${({theme})=>theme.color.secondary};
        border:1px solid transparent;
        color:${({theme})=>theme.color.tertiary};
    }
    @media (min-width:768px){
        width:6rem;
        height:6rem;
        font-size:2.4rem;
    }
    @media (min-width:1024px){
        width:8rem;
        height:8rem;
        &:not(:last-child){
            margin-right:0;
        }
        margin-bottom:3.2rem;
    }
`