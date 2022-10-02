import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { Row } from "react-bootstrap";
import "./pagination.css"

export default function NewsPagination({ pages , activePage }){
    const navigate = useNavigate()
    let items = [];
    for (let i = 1; i <= pages; i++) {
        items.push(
            <Pagination.Item onClick={()=>navigate(`/news/${i}`)} key={i} active={i == activePage}>
                {i}
            </Pagination.Item>
        )
    }

    return (
        <Row>
            <Pagination>{items}</Pagination>
        </Row>
    )
}