import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header `
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;

    nav {
        margin: auto;
        display: flex;
        gap: 15px;
    }

    footer {
        height: 25px;
        margin-top: 20px; 
        background-color: gray;
    }
`;

export const Link = styled(NavLink) `
    padding: 8px 12px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    

    &.active {
        color: white;
        background-color: orange;
    }
`;

export const Footer = styled.footer`
    height: 25px;
    margin-top: 20px; 
    background-color: gray;
    text-align: end;
    padding-right: 20px;
`;