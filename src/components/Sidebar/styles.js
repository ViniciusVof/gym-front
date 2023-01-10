import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #000;
`

export const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    color: #fff;
`

export const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #fff;
`

export const SidebarMenu = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    left: ${({ isOpened }) => isOpened ? '0' : '-100%'};
    transition: .6s;
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 45px;
`

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 16px;
    text-decoration: none;
    color: #fff;

    &:hover {
        background-color: #fff;
        color: #000;
        width: 100%;
        height: 35px;
        border-radius: 5px;
        margin: 0 2rem;
    }
`

export const MenuLinkText = styled.span`
    margin-left: 16px;
`

export const Content = styled.main`
    margin-left: ${({ isOpened }) => isOpened ? '250px' : '0px'};
    transition: .6s;
    padding: 2rem;
`