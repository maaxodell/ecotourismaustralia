import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import MainLogo from "../assets/logos/mainLogoWhite.png"

export default function Header() {

    return (
        <div>
            <Navbar style={{ backgroundColor: "#a2ac38" }} expand="md">
                <NavbarBrand href="/" style={{ paddingLeft: "15px" }}>
                    <img
                        src={MainLogo}
                        width="auto"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Tourism Australia Logo"
                    />
                </NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/about" style={{ color: "#f9f9fd" }}><h6 className="navItems">About Us</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/whatwedo" style={{ color: "#f9f9fd" }}><h6 className="navItems">What We Do</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/community" style={{ color: "#f9f9fd" }}><h6 className="navItems">Our Community</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/news" style={{ color: "#f9f9fd" }}><h6 className="navItems">News</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login" style={{ color: "#f9f9fd" }}><h6 className="navItems">Member Login</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/search" style={{ color: "#f9f9fd" }}><h6 className="navItems">Search</h6></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )


}