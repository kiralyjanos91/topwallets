import React from "react"
import "./footer.css"
import { useNavigate } from "react-router-dom"
import { Container , Col , Row } from "react-bootstrap"
import FooterLogo from "../images/footer-logo.png"

export default function Footer(){

    const navigate = useNavigate()

    return (
        <Container fluid className="footer-container">
            <Row className="footer-row">
                <Col className="footer-image-col">
                    <img src={FooterLogo} alt="footer-logo" className="footer-logo" />
                </Col>
                <Col>
                    <ul className="footer-link-list">
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li onClick={()=>navigate("/coins")}>Coins</li>
                        <li onClick={()=>navigate("/wallets")}>Wallets</li>
                        <li onClick={()=>navigate("/news/1")}>News</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}