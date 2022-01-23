import React, {useState} from 'react';
import Navbar from '../Navbar';
import {Container, Inner, Brand, BrandLogo, ToggleBtn, MenuIcon, Line} from './style';
const Header = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);
    return (
        <Container>
            <Brand to="/">
                <BrandLogo src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`} aria-label="Space Tourism" alt=""/>
            </Brand>
            <Inner>
                <Line/>
                <Navbar status={navbarStatus} setStatus={setNavbarStatus}/>
                <ToggleBtn onClick={()=>{setNavbarStatus(true)}}>
                    <MenuIcon src={`${process.env.PUBLIC_URL}/assets/shared/icon-hamburger.svg`} alt=""/>
                </ToggleBtn>
            </Inner>
        </Container>
    )
}

export default Header
