import React from 'react';
import {Container, List, Link, Number, Close } from './style';

const Navbar = ({status,setStatus}) => {
    
    return (
        <Container className={status ? 'active': ''}>
            <Close onClick={()=>{setStatus(false)}} />
            <List>
                <Link to="/home"><Number>00</Number>Home</Link>
                <Link to="/destination"><Number>01</Number>Destination</Link>
                <Link to="/crew"><Number>02</Number>Crew</Link>
                <Link to="/technology"><Number>03</Number>Technology</Link>
            </List>
        </Container>
    );
}

export default Navbar;
