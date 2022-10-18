import React, { useEffect , useState } from "react"
import { useParams , useNavigate , Link } from "react-router-dom"
import { Row , Col , Container } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import Button from "react-bootstrap/Button"
import "./coin.css"
import CoinChart from "../chart/coinchart";
import parse from 'html-react-parser'

export default function Coin(){
    const { coinId } = useParams()
    const [ coinInfo , setCoinInfo ] = useState({})
    const [ chartDays , setChartDays ] = useState(1)
    const [ coinFetchError , setCoinFetchError ] = useState(false)

    const priceFormat = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    })
    
    const selectedStyle = {
        textDecoration:"underline"
    }

    const navigate = useNavigate()

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'RapidApi Key',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
            }
        };
        
        fetch(`https://coingecko.p.rapidapi.com/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`, options)
            .then(response => {
                if(!response.ok)
                    {
                        throw new Error("Failed Fetch")
                    }
                return response.json()
            })
            .then(response => setCoinInfo(response))
            .catch(err => {
                setCoinFetchError(true)
                console.error(`Failed fetch. Error Code:${err}`)
            });
    },[])

    return (
        <Container className="coin-body">
            <Row>
                <Col>
                    <p className="goback" onClick={()=>{navigate(-1)}}>{"← Coins"}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {coinFetchError ?
                    <Col className="error-col">
                        <p className="errormessage">
                            Server overloaded - Please try again later
                        </p>
                    </Col>
                    :
                    coinInfo.id ?
                        (
                            <Row className="coin-data">
                                <Col className="coin-headline">
                                    <img src={coinInfo.image.small} alt={coinInfo.image.small} />
                                    <h1 className="coin-name">
                                        {coinInfo.name}
                                    </h1>
                                </Col>
                                <Row>
                                    <Row className="time-perios-row">
                                        <Col className="chart-time-period-text">
                                            <p onClick={()=>setChartDays(1)} style={chartDays === 1 ? selectedStyle : null}>
                                                1d
                                            </p>
                                            <p onClick={()=>setChartDays(2)} style={chartDays === 2 ? selectedStyle : null}>
                                                2d
                                            </p>
                                            <p onClick={()=>setChartDays(3)} style={chartDays === 3 ? selectedStyle : null}>
                                                3d
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
                                <Row className="coin-buttons-row">
                                    <Col className="coin-button">
                                        <Button href={coinInfo.links.homepage[0]} target="_blank">Visit Website</Button>
                                    </Col>
                                    <Col className="coin-button">
                                        <Link to="/wallets">
                                            <Button>Check Top Wallets</Button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row className="coin-description-headline">
                                    <hr />
                                    <h2>Coin description:</h2>
                                </Row>
                                <Row>
                                    <Col className="coin-description">
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