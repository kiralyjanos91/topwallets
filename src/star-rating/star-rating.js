import React from "react";
import "./star-rating.css"
import { Col } from "react-bootstrap";
import EmptyStar from "../images/emptystar.png"
import FullStar from "../images/fullstar.png"
import HalfStar from "../images/halfstar.png"


export default function StarRating({ rating }){

    const fullNumber = Math.floor(rating)
    const ratings = new Array(5)

    ratings.fill("empty")
    ratings.fill("full",0,fullNumber)

    if (fullNumber !== rating)
        {
            ratings.fill("half",fullNumber,fullNumber+1)
        }
    
    const stars = ratings.map((rating,index)=>{
        if(rating === "full")
            {
                return <img src={FullStar} key={index} />
            }
        else if(rating === "half")
            {
                return <img src={HalfStar} key={index} />
            }
        else
            {
                return <img src={EmptyStar} key={index} />
            }   
    })

    return(
            <Col className="star-rating">
                {stars}
            </Col>
    )
}