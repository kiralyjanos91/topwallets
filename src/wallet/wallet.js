import React from "react"
import { useNavigate, useParams , Link } from "react-router-dom"
import { Col , Row , Container , Button } from "react-bootstrap"
import walletsData from "../wallets/wallets-data"
import StarRating from "../star-rating/star-rating"
import "./wallet.css"

export default function Wallet(){

    const { walletName } = useParams()
    const navigate = useNavigate()
    const { 
        name,
        rating, 
        description, 
        website, 
        image, 
        bullets 
    } = walletsData.find((data)=>data.name === walletName) 

    const bulletsList = bullets.map((bullet,index)=>
        <Row key={index}>
            <li >{bullet}</li>
        </Row>
    )

    return(
        <Container className="wallet">
            <Row>
                <Col>
                    <p className="goback" onClick={()=>{navigate(-1)}}>{"← Wallets"}</p>
                </Col>
            </Row>
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
                <Col className="wallet-img-col" md="6">
                    <img src={image} alt={image} className="wallet-image"/>
                </Col>
                <Col className="bullets-col" md="6">
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
            <Row className="wallet-buttons-row">
                <Col className="wallet-buttons" md="6">
                    <Button href={`${website}`} target="_blank">Visit Website</Button>
                </Col>
                <Col className="wallet-buttons" md="6">
                    <Link to="/coins">
                        <Button>Check Top Coins</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}