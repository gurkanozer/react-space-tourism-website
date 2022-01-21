import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html { font-size: 62.5%; } 
body{
    font-family:${({theme}) => theme.font.primary};
    background-color: ${({theme})=>theme.color.tertiary};
}
*,*::after,*::before{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    font-weight:400;
}
button{
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
}

img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
}
h1,h2,h3,h4{
    color: ${({theme}) => theme.color.secondary};
}
p{
    font-family:${({theme})=>theme.font.secondary};
    font-size:1.5rem;
    line-height:2.5rem;
    color:${({theme})=> theme.color.primary};
}
h1{
    font-size:8rem;
    line-height:10rem;
}
h2{
    font-size:5.6rem;
}
h3{
    font-size:2.4rem;
}
h4{
    font-size:1.6rem;
    color:${({theme})=> theme.color.primary};
}
h5{
    font-size:1.6rem;
    color:${({theme})=> theme.color.primary};
}
@media (min-width:768px){
    h1{
        font-size:15rem;
        line-height:15rem;
    }
    h2{
        font-size:8rem;
    }
    h3{
        font-size:4rem;
    }
    h4{
        font-size:2.4rem;
    }
    h5{
        font-size:2rem;
    }
    p{
        font-size:1.6rem;
        line-height:2.8rem;
    }
}
@media (min-width:1024px){
    h2{
        font-size:10rem;
    }
    h3{
        font-size:5.6rem;
    }
    h4{
        font-size:3.2rem;
    }
    h5{
        font-size:2.8rem;
    }
    p{
        font-size:1.8rem;
        line-height:3.2rem;
    }
}

@keyframes animateShadow{
    0% {
        box-shadow: 0 0 0 0 rgba(11, 13, 23, 46%); 
    }
    25%{
        transform:scale(1.05);
    }
    50%{
        box-shadow: 0 0 0 4rem rgba(11, 13, 23, 46%); 
        transform: scale(1);
    }
    100%{
        box-shadow: 0 0 0 3rem rgba(11, 13, 23, 46%); 
    }
}
`;

export default GlobalStyle;