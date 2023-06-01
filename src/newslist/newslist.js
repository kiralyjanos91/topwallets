import React, { useEffect , useState } from "react"
import { Col , Row , Container } from "react-bootstrap";
import NewsListElement from "./newslistelement";
import Spinner from "react-bootstrap/Spinner";
import "./news-list.css"
import { useParams } from "react-router-dom";
import NewsPagination from "../pagination/pagination";

export default function NewsList(){

    const { page } = useParams()
    const [ newsListData , setNewsListData ] = useState([])
    const [ fetchError , setFetchError ] = useState(false)

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4c1b4e2321mshe0210a636c78dd0p165dacjsn7f8b788e7094',
                'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
            }
        };
        
        fetch('https://mboum-finance.p.rapidapi.com/ne/news', options)
            .then(response => response.json())
            .then(response => setNewsListData(response))
            .catch(err => {
                setFetchError(true)    
                console.error(err)
            });
    },[])

    const newsList = newsListData.slice((page-1)*10,page*10).map(( news , index )=>
        <NewsListElement 
            key={index}
            title={news.title}
            source={news.source}
            url={news.link}
        />
    )

    const pageCount = Math.ceil(newsListData.length / 10)

    return(
        <>
            <div
                className = "background-effect-div"
            >
            </div>
            <Container className="news-list">
                <Row className="headline-text-row">
                    <Row className="headline-text-row-inner news-headline">
                        <h1>Crypto News</h1>
                        <div className="gradient-hr" />
                    </Row>
                </Row>
                    {
                    fetchError ?
                        <Row className="error-row">
                            <h3>Something Went Wrong. Please come back later!</h3>
                        </Row>
                    :
                    <>
                            {
                                newsListData.length > 0 ?
                                <>
                                    {newsList}
                                    <NewsPagination 
                                        activePage={page}
                                        pages={pageCount}
                                    />
                                </>
                                :
                                    <Col className="news-spinner-col">
                                        <Spinner animation="border" variant="light" />
                                    </Col>
                            }
                        </>
                    }
            </Container>
        </>
    )
}