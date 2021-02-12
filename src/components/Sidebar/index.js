import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRouter } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                        About
                    </SidebarLink>
                    <SidebarLink to="product" onClick={toggle} smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                        Product
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle} smooth={true}  duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/contact">Contact</SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
