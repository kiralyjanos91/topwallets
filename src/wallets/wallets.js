import React from "react"
import "./wallets.css"
import walletsData from "./wallets-data"
import StarRating from "../star-rating/star-rating"
import { Row , Col , Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Wallets(){

    const walletsList = walletsData.map((wallet,index)=>
        <Link to={`/wallets/${wallet.name}`} key={index}>
            <Row>
                <Col md="4"><p>{index+1}</p></Col>
                <Col md="4"><p>{wallet.name}</p></Col>
                <Col md="4">
                    <StarRating rating={wallet.rating} />
                </Col>
            </Row>
            {wallet.id !== walletsData.length.toString() &&
                <hr />
            }
        </Link>
    )
    return(
        <Container className="wallets-container">
            {walletsList}
        </Container>
    )
}