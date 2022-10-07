import React from "react"
import { Link } from "react-router-dom"
import { Row , Col , Container , Button } from "react-bootstrap"
import "./header.css"
import cryptoImg from "../images/cryptoimg.png"

export default function Header(){
    return(
        <Container className="header" fluid>
            <Container className="header-blur" fluid>
                <Container>
                    <Row>
                        <Col md="6" className="header-text">
                            <h1>Top Picks for the Best Crypto Wallets of 2022</h1>
                            <Row className="header-buttons-row">
                                <Col className="header-buttons">
                                    <Link to="/wallets">
                                        <Button>Check Them Now</Button>
                                    </Link>
                                    <Link to="/coins">
                                        <Button>Check Coins</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="6">
                            <img src={cryptoImg} alt="crypto-img" className="crypto-img" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}