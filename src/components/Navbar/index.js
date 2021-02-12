import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav, NavbarContainer, NavLogo, Bars, NavItem, NavMenu
    , NavLinks, NavBtn, NavBtnLink
} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>waiteu</NavLogo>
                    <Bars onClick={toggle}>
                        <FaBars />
                    </Bars>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="product" smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">Product</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact" >Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
