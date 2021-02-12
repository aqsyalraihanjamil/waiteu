import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? "100%" : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    curson: pointer;
    outline: none;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(5,60px);
    }
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`

export const SidebarRouter = styled(LinkRouter)`
    border-radius: 50px;
    background: #F17A7E;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`