import React from "react";
import { Col } from "antd";

function MoviesRows(props) {
    return (
        <Col lg={4} md={4} xs={0}>
            <div style={{position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
            <img style = {{width: '30%', height:'320px'}} alt="img" src={props.image} />
            </a>
            </div>
        </Col>
    )
}
export default MoviesRows