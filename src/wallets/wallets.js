import React from "react"
import "./wallets.css"
import walletsData from "./wallets-data"
import StarRating from "../star-rating/star-rating"
import { Row , Col , Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Wallets(){

    const walletsList = walletsData.map((wallet,index)=>
        <Link to={`/wallets/${wallet.name}`} key={index}>
            <Row className="wallets-list-row">
                <Col md="4" className="wallet-rank"><p>{index+1}.</p></Col>
                <Col md="4"><p>{wallet.name}</p></Col>
                <Col md="4">
                    <StarRating rating={wallet.rating} />
                </Col>
            </Row>
        </Link>
    )
    return(
        <Container className="wallets-container">
            <Row>
                <h1>Top Wallets</h1>
            </Row>
            <Row className="wallets-list">
                {walletsList}
            </Row>
        </Container>
    )
}