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
        id,
        bullets 
    } = walletsData.find((data)=>data.name === walletName) 

    const bulletsList = bullets.map((bullet,index)=>
        <Row key={index}>
            <li >{bullet}</li>
        </Row>
    )

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
            <Row className="wallet-img-and-bullets-row">
                <Col className="wallet-img-col">
                    <img src={image} alt={image} className="wallet-image"/>
                </Col>
                <Col className="bullets-col">
                    <ul>
                        {bulletsList}
                    </ul>
                </Col>
            </Row>
            <Row className="description-row">
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