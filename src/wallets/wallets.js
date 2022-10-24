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
            <Row className="headline-text-row">
                <Row className="headline-text-row-inner">
                    <h1>Top Wallets</h1>
                    <div className="gradient-hr" />
                </Row>
            </Row>
            <Row className="wallets-description">
                <p>
                    With so many “independent” wallets on the market today, it can be difficult to determine which ones are legitimate, and which ones will only provide more questions than answers.
                    To find the best crypto wallets, we researched multiple products to understand their interface, features, how they work, their level of security, and who stands to benefit most from each type of wallet.
                    Whether you’re a long-term holder through thick and thin, or an investor who wants to reinvent their relationship with money through digital currencies, these wallets stood out as among the best in 2022. 
                </p>
            </Row>
            <Row className="wallets-list">
                {walletsList}
            </Row>
        </Container>
    )
}