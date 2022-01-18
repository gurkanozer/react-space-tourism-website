import styled from 'styled-components';

export const Container = styled.main`
width:100%;
height:100%;
padding:0 2.4rem;
background: url('${process.env.PUBLIC_URL}/assets/${({bg})=>bg}/background-${({bg})=>bg}-mobile.jpg') no-repeat bottom center;
background-size:cover;
@media (min-width:768px){
    background: url('${process.env.PUBLIC_URL}/assets/${({bg})=>bg}/background-${({bg})=>bg}-tablet.jpg') no-repeat bottom center;
    background-size:cover;
}
@media (min-width:1024px){
    background: url('${process.env.PUBLIC_URL}/assets/${({bg})=>bg}/background-${({bg})=>bg}-desktop.jpg') no-repeat bottom center;
    background-size:cover;
}
`
