import React from "react"
import { Col , Container , Row } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import { Link } from "react-router-dom"
import "./coins.css"
import coinIcons from "./coinicons"

export default function Coins({ coinlist , isError }){

    const priceFormat = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    })

    const coinList = Object.entries(coinlist).map((coin)=>
        <Col md="3" key={coin[0]}>
            <Link to={`/coins/${coin[0]}`}>
                <div className="coin-list-element">
                    <img src={coinIcons[coin[0]]} alt={coinIcons[coin[0]]} />
                    <p className="coin-list-coin-name">
                        {coin[0]}
                    </p>
                    <p className="coin-list-price">
                        {`Price: ${priceFormat.format(coin[1].usd)}`}
                    </p>
                </div>
            </Link>
        </Col>
    )

    return(
        <Container className="coins">
            <Row className="headline-text-row">
                <Row className="headline-text-row-inner coins-headline">
                    <h1>Top Coins</h1>
                    <div className="gradient-hr" />
                </Row>
            </Row>
            <Row className="coin-list">
                {isError ? 
                    <p>Server Overloaded - Please try again later</p>      
                        :   
                    coinList.length > 1 ? 
                        coinList
                    :
                        <Col className="spinner-col">
                            <Spinner animation="border" variant="light" />
                        </Col>
                }
            </Row>
        </Container>
    )
}