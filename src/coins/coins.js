import React from "react"
import { Col , Container , Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./coins.css"
import coinIcons from "./coinicons"

export default function Coins({ coinlist }){

    const coinList = Object.entries(coinlist).map((coin)=>
        <Col md="3" key={coin[0]}>
            <Link to={`/coins/${coin[0]}`}>
                <div className="coin-list-element">
                    <img src={coinIcons[coin[0]]} alt={coinIcons[coin[0]]} />
                    <p>
                        {coin[0]}
                    </p>
                    <p>
                        {`Price: $${coin[1].usd}`}
                    </p>
                </div>
            </Link>
        </Col>
    )

    return(
        <Container className="coins">
            <Row className="coins-headline">
                <h1>Top Coins</h1>
            </Row>
            <Row className="coin-list">
                {coinList}
            </Row>
        </Container>
    )
}