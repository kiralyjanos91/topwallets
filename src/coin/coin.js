import React, { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { Row , Col , Container } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import "./coin.css"
import CoinChart from "../chart/coinchart";
import parse from 'html-react-parser'

export default function Coin(){
    const { coinId } = useParams()
    const [ coinInfo , setCoinInfo ] = useState({})
    const [ chartDays , setChartDays ] = useState(1)
    const priceFormat = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    })
    
    const selectedStyle = {
        color:"grey"
    }

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '56bd2c0a8bmshb28498e9bd62633p1d4ce4jsn48be7ca34c90',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        };
        
        fetch(`https://coingecko.p.rapidapi.com/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`, options)
            .then(response => response.json())
            .then(response => setCoinInfo(response))
            .catch(err => console.error(err));
    },[])

    return (
        <Container className="coin-body">
            <Row>
                <Col>
                    {Object.keys(coinInfo).length > 0 ?
                        (
                            <Row className="coin-data">
                                <Col className="coin-headline">
                                    <img src={coinInfo.image.small} alt={coinInfo.image.small} />
                                    <h1 className="coin-name">
                                        {coinInfo.name}
                                    </h1>
                                </Col>
                                <Row>
                                    <Row>
                                        <Col className="chart-time-period-text">
                                            <p onClick={()=>setChartDays(1)} style={chartDays === 1 ? selectedStyle : null}>
                                                1D
                                            </p>
                                            <p onClick={()=>setChartDays(2)} style={chartDays === 2 ? selectedStyle : null}>
                                                2D
                                            </p>
                                            <p onClick={()=>setChartDays(3)} style={chartDays === 3 ? selectedStyle : null}>
                                                3D
                                            </p>
                                        </Col>
                                    </Row>
                                    <Col md={{span:8,offset:2}} className="chart-col">
                                        <CoinChart 
                                            sevenDaysPrice={coinInfo.market_data.sparkline_7d.price}
                                            currentPrice={coinInfo.market_data.current_price.usd}
                                            timePeriod={chartDays}
                                        />
                                    </Col>
                                </Row>
                                <Row className="market-data">        
                                    <Col md="6">
                                        {`Current price: ${priceFormat.format(coinInfo.market_data.current_price.usd)}`}
                                    </Col>
                                    <Col md="6">
                                        {`Market cap: ${priceFormat.format(coinInfo.market_data.market_cap.usd)}`}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="coin-description">
                                        <hr />
                                        {
                                            parse(coinInfo.description.en)
                                        }
                                    </Col>
                                </Row>
                            </Row>
                        )
                    : 
                        <Col className="spinner-col">
                            <Spinner animation="border" variant="light" />
                        </Col>
                    }
                </Col>
            </Row>
        </Container>
    )
}