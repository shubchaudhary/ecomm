import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    height: 50px;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

const LinksWrapper = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LinkItem = styled.li`
    margin: 0 10px;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;

const LinkLogo = styled(Link)`
    display: block;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
        background-color: #111;
    }
`;

export const Navbar = () => {
    return (
        <Nav>
            <LinkLogo to="/">E-COMM</LinkLogo>
            <LinksWrapper>
                <LinkItem>
                    <StyledLink to="/">Home</StyledLink>
                </LinkItem>
                <LinkItem>
                    <StyledLink to="/contact">About</StyledLink>
                </LinkItem>
                <LinkItem>
                    <StyledLink to="/cart">
                        <ShoppingCart size={20} />
                    </StyledLink>
                </LinkItem>
            </LinksWrapper>
        </Nav>
    );
};
