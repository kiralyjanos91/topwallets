import React from "react"
import "./footer.css"
import { Container , Col , Row } from "react-bootstrap"

export default function Footer(){
    return (
        <Container fluid className="footer-container">
            <Container className="footer">
                <Row>
                    <Col>
                    <h1>
                        LOGO
                    </h1>
                    </Col>
                    <Col>
                        <ul>
                            <li>asd</li>
                            <li>dfg</li>
                            <li>fgh</li>
                            <li>hjkh</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}