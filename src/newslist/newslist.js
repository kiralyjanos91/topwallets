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

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '56bd2c0a8bmshb28498e9bd62633p1d4ce4jsn48be7ca34c90',
                'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
            }
        };
        
        fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
            .then(response => response.json())
            .then(response => setNewsListData(response))
            .catch(err => console.error(err));
    },[])

    const newsList = newsListData.slice((page-1)*10,page*10).map(( news , index )=>
        <NewsListElement 
            key={index}
            title={news.title}
            source={news.source}
            url={news.url}
        />
    )

    const pageCount = Math.ceil(newsListData.length / 10)

    return(
        <Container className="news-list">
            <Row className="news-headline">
                <h1>Crypto News</h1>
            </Row>
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
        </Container>
    )
}