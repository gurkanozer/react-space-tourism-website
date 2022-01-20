import styled from 'styled-components';

export const Container = styled.div`
    margin-top:2.6rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (min-width:1024px){
        justify-content:right;
    }
    `
export const Inner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media (min-width:768px){
        margin-top:5.3rem;
        max-width:57.3rem;
    }
    @media (min-width:1024px){
        margin-top:6.4rem;
        align-items:flex-start;
    }
`

export const TabList = styled.ul`
    display:flex;
    align-items:center;
    justify-content:left;
    margin-bottom:2rem;
    @media (min-width:768px){
        margin-bottom:3.2rem;
    }
`
export const TabText = styled.span`
    padding-bottom:0.8rem;
    border-bottom:3px solid transparent;
    ` 
export const TabItem = styled.li`
    font-size:1.4rem;
    font-family:${({theme})=>theme.font.tertiary};
    letter-spacing:2.36px;
    text-transform:uppercase;
    color:${({theme})=>theme.color.primary};
    cursor:pointer;
    &:not(:last-child){
        padding-right:2.6rem;
    }
    &.active{
        ${TabText}{
            border-bottom:3px solid ${({theme})=>theme.color.primary};
        }
    }
    @media (min-width:768px){
        font-size:1.6rem;
        letter-spacing:2.7px;
    }
`

export const Title = styled.h2`
    text-transform:uppercase;
    @media (min-width:1024px){
        margin-bottom:1.4rem;
    }
`
export const Text = styled.p`
    padding-bottom:3.2rem;
    border-bottom:1px solid ${({theme})=>theme.color.secondary};
    text-align:center;
    @media (min-width:445px){
        max-width:44.5rem;
    }
    @media (min-width:768px){
        max-width:100%;
    }
    @media (min-width:1024px){
        max-width:44.5rem;
        text-align:left;
        padding-bottom:5.4rem;
        margin-bottom:2.8rem;
    }
`
export const Stats = styled.div`
    width:100%;
    padding:3.2rem 0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media (min-width:768px){
        flex-direction:row;
        padding:2.8rem;
        justify-content:space-evenly;
    }
    @media (min-width:1024px){
        padding-left:0;
        max-width:44.5rem;
        justify-content:left;
    }
`
export const StatsSub = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:3.2rem;
    text-transform:uppercase;
    @media (min-width:1024px){
        &:not(:last-child){
            margin-right:7.9rem;
        }
    }
`
export const StatsText = styled.span`
    font-size:1.4rem;
    letter-spacing:2.36px;
    margin-bottom:1.2rem;
    color:${({theme})=>theme.color.secondary};
`
export const StatsNumber = styled.span`
    font-size:2.8rem;
    color:${({theme})=>theme.color.primary};
`