import React from "react"
import { Col , Row , Button } from "react-bootstrap"

export default function NewsListElement({ title , source , url }){
    return(
        <Row className="news-list-item-row">
            <Col md="9">{title}</Col>
            <Col md="3" className="news-button-col">
                <Button href={url} target="_blank">
                    {`Read it at ${source}`}
                </Button>
            </Col>
        </Row>
    )
}