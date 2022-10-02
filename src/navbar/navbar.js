import React from "react"
import "./navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Logo from "../images/logo.png"

export default function Menu(){
    return (
        <Navbar collapseOnSelect className="menu" bg="transparent" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={Logo} alt="logo" className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to="/wallets">Wallets</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/coins">Coins</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/news/1">News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}