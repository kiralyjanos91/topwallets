import React from "react"
import { useParams } from "react-router-dom"
import { Col , Row , Container , Button } from "react-bootstrap"
import walletsData from "../wallets/wallets-data"
import StarRating from "../star-rating/star-rating"
import "./wallet.css"

export default function Wallet(){

    const { walletName } = useParams()
    const { 
        name,
        rating, 
        rank, 
        description, 
        website, 
        image, 
        id 
    } = walletsData.find((data)=>data.name === walletName) 

    return(
        <Container className="wallet">
            <Row className="wallet-name">
                <Col>
                    <h1>
                        {name}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StarRating rating={rating} />
                </Col>
            </Row>  
            <Row>
                <Col>
                    <img src={image} alt="wallet-image" className="wallet-image"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    {description}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button href={`${website}`} className="visit-wallet-button">Visit Website</Button>
                </Col>
            </Row>
        </Container>
    )
}